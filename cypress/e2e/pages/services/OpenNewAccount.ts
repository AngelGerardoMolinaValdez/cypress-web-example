export class OpenNewAccount {
    clickInToOption() {
        cy.get('[href="/parabank/openaccount.htm"]').click()
        cy.get('h1[class="title"]').should("be.visible")
    }

    selectTypeAccount(type: string) {
        cy.get("#type").select(type);
    }

    selectAccountReference(account: string) {
        cy.get("#fromAccountId").select(account);
    }

    create() {
        cy.get('[type="submit"]').click();
    }

    getAccountId() {
        cy.get('h1.title').should("be.visible");
        cy.get('#newAccountId')
        .invoke('text')
        .should("match", /\d.+/gm)
    }
}