import Papa from 'papaparse';
import { LoginPage } from './pages/LoginPage';
import { OpenNewAccountPage } from './pages/OpenNewAccountPage'
import { TransferFundsPage } from './pages/TransferFundsPage'

describe('Funciones de trabajo', () => {
  const loginPage = new LoginPage()
  let testData = []

  before(() => {
    cy.fixture('account.csv').then((csvString) => {
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
      loginPage.inputUsername(data.username);
      loginPage.inputPassword(data.password);
      loginPage.submit();
    });    
  });

  afterEach(() => {
    loginPage.close()
  })

  it('Abrir una cuenta nueva', () => {
    testData.forEach((rowData) => {
      const newAccount = new OpenNewAccountPage();
      newAccount.clickInToOption();
      newAccount.selectTypeAccount(rowData.type);
      newAccount.selectAccountReference(rowData.accountReference);
      newAccount.submit();
      newAccount.getAccountId();
    })
  });

  it('Transferir fondos', () => {
    const transferFunds = new TransferFundsPage();
    transferFunds.clickInToOption();
    transferFunds.inputAmount("1");
    transferFunds.selectSenderAccount("12345");
    transferFunds.selectReceiverAccount("12456");
    transferFunds.submit();
    transferFunds.validateTransfer();
  });

})