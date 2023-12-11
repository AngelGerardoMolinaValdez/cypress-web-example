import { LoginPage } from './pages/LoginPage';
import { OpenNewAccount } from './pages/services/OpenNewAccount'

describe('Creación de una cuenta', () => {
  const loginPage = new LoginPage()

  it('crear una cuenta', () => {
    loginPage.open('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.inputCredentials("john", "demo");
    loginPage.submit();
  
    const newAccount = new OpenNewAccount();
    newAccount.clickInToOption();
    newAccount.selectTypeAccount("SAVINGS");
    newAccount.selectAccountReference("12345");
    newAccount.create();
    newAccount.getAccountId();
  });

})