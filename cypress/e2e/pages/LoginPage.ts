export class LoginPage {
    open(url: string) {
        cy.visit(url);
        cy.get('[title="ParaBank"][class="logo"]')
        .should("be.visible");
        cy.addTestContext("Login Page is open");
    }

    inputUsername(username: string) {
        cy.get('[name="username"]').type(username);
        cy.addTestContext(`Username is ${username}`);
    }

    inputPassword(password: string) {
        cy.get('[name="password"]').type(password);
        cy.addTestContext(`Password is ${password}`);
    }

    submit() {
        cy.get('[type="submit"]').click()
        cy.url().should("include", "overview.htm")
        cy.addTestContext("Login is successful");
    }

    close() {
        cy.get('[href="/parabank/logout.htm"]').click();
        cy.addTestContext("Logout is successful");
    }
}
