import Papa from 'papaparse';
import { LoginPage } from './pages/LoginPage';
import { LogoutAction } from './pages/Logout'
import { OpenNewAccount } from './pages/services/OpenNewAccount'
import { TransferFunds } from './pages/services/TransferFunds'

describe('Servicios disponibles para una cuenta', () => {
  const loginPage = new LoginPage()
  const logoutAction = new LogoutAction()

  beforeEach(() => {
    cy.fixture('data.csv').then((csvString) => {
      Papa.parse(csvString, {
        header: true,
        complete: (results) => {
          cy.wrap(results.data).as('testData');
        }
      });
    });
  
    cy.fixture('login.json').then((data) => {
      loginPage.open(data.url);
      loginPage.inputCredentials(data.username, data.password);
      loginPage.submit();
    });    
  });

  afterEach(() => {
    logoutAction.close()
  })

  it('Abrir una cuenta nueva', () => {
    cy.get('@testData').then((rows) => {
      const rowData = rows[0];
      const newAccount = new OpenNewAccount();
      newAccount.clickInToOption();
      newAccount.selectTypeAccount(rowData.typeAccount);
      newAccount.selectAccountReference(rowData.accountReference);
      newAccount.create();
      newAccount.getAccountId();
    });
  });

  it('Transferir fondos', () => {
    cy.get('@testData').then((rows) => {
      const rowData = rows[0];
      const transferFunds = new TransferFunds(
        rowData.accountReference, 
        rowData.accountSender,
        rowData.amount
      );
      transferFunds.clickInToOption();
      transferFunds.inputAmount();
      transferFunds.selectSenderAccount();
      transferFunds.selectReceiverAccount();
      transferFunds.transfer();
      transferFunds.validateTransfer();
    });
  });
})