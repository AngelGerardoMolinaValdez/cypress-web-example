import { LoginPage } from "../pages/LoginPage";

export class LoginKeywords {
    private loginPage: LoginPage;

    constructor() {
        this.loginPage = new LoginPage();
    }

    login() {
        cy.fixture('login.json').then((data) => {
            this.loginPage.open(data.url);
            this.loginPage.inputUsername(data.username);
            this.loginPage.inputPassword(data.password);
            this.loginPage.submit();
        });
    }

    logout() {
        this.loginPage.close();
    }
}
