import Papa from 'papaparse';
import { LoginPage } from './pages/LoginPage';
import { LogoutAction } from './pages/Logout'
import { OpenNewAccount } from './pages/services/OpenNewAccount'
import { TransferFunds } from './pages/services/TransferFunds'

describe('Servicios de transferencia', () => {
  const loginPage = new LoginPage()
  const logoutAction = new LogoutAction()
  let testData = []

  before(() => {
    cy.fixture('transfer.csv').then((csvString) => {
      Papa.parse(csvString, {
        header: true,
        complete: (results) => {
          testData = results.data;
        }
      });
    });
  });

  beforeEach(() => {
    cy.fixture('login.json').then((data) => {
      loginPage.open(data.url);
      loginPage.inputCredentials(data.username, data.password);
      loginPage.submit();
    });    
  });

  afterEach(() => {
    logoutAction.close()
  })

  it('Transferir fondos', () => {
    testData.forEach((rowData) => {
      const transferFunds = new TransferFunds(
        rowData.fromAccount, 
        rowData.toAccount,
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