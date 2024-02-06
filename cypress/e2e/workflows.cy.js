import Papa from 'papaparse';
import { LoginPage } from './pages/LoginPage';
import { OpenNewAccountPage } from './pages/OpenNewAccountPage'
import { TransferFundsPage } from './pages/TransferFundsPage'

describe('Escenarios de usuario', () => {
    const loginPage = new LoginPage();
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
        cy.fixture('login.json').then((data) => {
        loginPage.open(data.url);
        loginPage.inputUsername(data.username);
        loginPage.inputPassword(data.password);
        loginPage.submit();
        });    
    });
    
    afterEach(() => {
        loginPage.close()
    });
    
    it('Abrir cuenta y transferir fondos', () => {
        const newAccount = new OpenNewAccountPage();
        const transferFunds = new TransferFundsPage();

        testData.forEach((rowData) => {
            newAccount.clickInToOption();
            newAccount.selectTypeAccount(rowData.type);
            newAccount.selectAccountReference(rowData.accountReference);
            newAccount.submit();
            newAccount.getAccountId();

            transferFunds.clickInToOption();
            transferFunds.inputAmount("1");
            transferFunds.selectSenderAccount("12345");
            transferFunds.selectReceiverAccount("12456");
            transferFunds.submit();
            transferFunds.validateTransfer();
        })
    });
})