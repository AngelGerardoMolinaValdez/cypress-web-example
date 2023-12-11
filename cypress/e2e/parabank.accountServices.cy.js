import { LoginPage } from './pages/LoginPage';
import { LogoutAction } from './pages/Logout'
import { OpenNewAccount } from './pages/services/OpenNewAccount'
import { TransferFunds } from './pages/services/TransferFunds'

describe('Servicios disponibles para una cuenta', () => {
  const loginPage = new LoginPage()
  const logoutAction = new LogoutAction()

  beforeEach(() => {
    loginPage.open('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.inputCredentials("john", "demo");
    loginPage.submit();
  });

  afterEach(() => {
    logoutAction.close()
  })

  it('Abrir una cuenta nueva', () => {
    const newAccount = new OpenNewAccount();
    newAccount.clickInToOption();
    newAccount.selectTypeAccount("SAVINGS");
    newAccount.selectAccountReference("12345");
    newAccount.create();
    newAccount.getAccountId();
  });

  it('Transferir fondos', () => {
    const transferFunds = new TransferFunds("12345", "12456", "1");
    transferFunds.clickInToOption();
    transferFunds.inputAmount();
    transferFunds.selectSenderAccount();
    transferFunds.selectReceiverAccount();
    transferFunds.transfer();
    transferFunds.validateTransfer();
  });
})