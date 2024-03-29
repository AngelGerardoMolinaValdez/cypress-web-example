import Papa from 'papaparse';
import { LoginKeywords } from './keywords/LoginKeywords';
import { OpenNewAccountKeywords } from './keywords/OpenNewAccountKeywords';
import { TransferFundsKeywords } from './keywords/TransferFundsKeywords';

describe('Pruebas de extremo a extremo', () => {
  const loginKeywords = new LoginKeywords()
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
    loginKeywords.login();
  });

  afterEach(() => {
    loginKeywords.logout()
  })

  it('Abrir una cuenta nueva', () => {
    testData.forEach((rowData) => {
      const newAccount = new OpenNewAccountKeywords();
      newAccount.openNewAccount(rowData.type, rowData.accountReference);
    })
  });

  it('Transferir fondos', () => {
    const transfer = new TransferFundsKeywords();
    transfer.transferFunds("1", "13344", "22668");
  });

})