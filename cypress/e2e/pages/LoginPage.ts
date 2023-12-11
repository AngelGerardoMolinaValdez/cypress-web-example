export class LoginPage {
    open(url: string) {
        cy.visit(url);
        cy.get('[title="ParaBank"][class="logo"]')
        .should("be.visible");
    }

    inputCredentials(username: string, password: string) {
        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
    }

    submit() {
        cy.get('[type="submit"]').click()
        cy.url().should("include", "overview.htm")
    }
}
