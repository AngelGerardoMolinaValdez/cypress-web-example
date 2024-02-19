export class TransferFundsPage {

    clickInToOption() {
        cy.get('[href="/parabank/transfer.htm"').click()
        cy.get('h1[class="title"]').should("be.visible")
        cy.addTestContext("Transfer Funds Page is open");
    }

    inputAmount(amount: string) {
        cy.get("#amount").type(amount);
        cy.addTestContext(`Amount is ${amount}`);
    }
    
    selectFromAccount(accountFrom: string) {
        cy.get("#fromAccountId").select(accountFrom);
        cy.addTestContext(`From Account is ${accountFrom}`);
    }

    selectToAccount(accountTo: string) {
        cy.get("#toAccountId").select(accountTo);
        cy.addTestContext(`To Account is ${accountTo}`);
    }

    submit() {
        cy.get('[type="submit"]').click();
        cy.addTestContext("Submit is successful");
    }

    validateTransfer() {
        cy.get('h1.title').should("be.visible");
        cy.get('div[ng-if="showResult"] p').first()
        .invoke('text')
        .then((text) => {
          expect(text).to.match( /.*has been transferred.*/gm);
        });
        cy.screenshot("transfer-funds")
        cy.addTestContext("Transfer is successful");
    }
}