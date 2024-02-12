export class TransferFundsPage {

    clickInToOption() {
        cy.get('[href="/parabank/transfer.htm"').click()
        cy.get('h1[class="title"]').should("be.visible")
    }

    inputAmount(amount: string) {
        cy.get("#amount").type(amount);
    }
    
    selectFromAccount(accountFrom: string) {
        cy.get("#fromAccountId").select(accountFrom);
    }

    selectToAccount(accountTo: string) {
        cy.get("#toAccountId").select(accountTo);
    }

    submit() {
        cy.get('[type="submit"]').click();
    }

    validateTransfer() {
        cy.get('h1.title').should("be.visible");
        cy.get('div[ng-if="showResult"] p').first()
        .invoke('text')
        .then((text) => {
          expect(text).to.match( /.*has been transferred.*/gm);
        });
    }
}