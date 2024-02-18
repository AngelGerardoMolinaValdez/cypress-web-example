import Papa from 'papaparse';
import { LoginKeywords } from './keywords/LoginKeywords';
import { OpenNewAccountKeywords } from './keywords/OpenNewAccountKeywords';
import { TransferFundsKeywords } from './keywords/TransferFundsKeywords';

describe('Escenarios de usuario', () => {
    const loginKeywords = new LoginKeywords();
    let testData = [];
    
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
    });
    
    it('Abrir cuenta y transferir fondos', () => {
        testData.forEach((rowData) => {
            const newAccount = new OpenNewAccountKeywords();
            newAccount.openNewAccount(rowData.type, rowData.accountReference);

            const transfer = new TransferFundsKeywords();
            transfer.transferFunds("1", "13344", "22668");
        })
    });
})