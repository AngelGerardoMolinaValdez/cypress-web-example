export class OpenNewAccountPage {
    clickInToOption() {
        cy.get('[href="/parabank/openaccount.htm"]').click()
        cy.get('h1[class="title"]').should("be.visible")
        cy.addTestContext("Open New Account Page is open");
    }

    selectTypeAccount(type: string) {
        cy.get("#type").select(type);
        cy.addTestContext(`Type is ${type}`);
    }

    selectAccountReference(account: string) {
        cy.get("#fromAccountId").select(account);
        cy.addTestContext(`Account is ${account}`);
    }

    submit() {
        cy.get('[type="submit"]').click();
        cy.addTestContext("Submit is successful");
    }

    getAccountId() {
        cy.get('h1.title').should("be.visible");
        cy.get('#newAccountId')
        .invoke('text')
        .should("match", /\d.+/gm)
        cy.addTestContext("Account ID is visible");
        cy.screenshot("open-new-account");
    }
}