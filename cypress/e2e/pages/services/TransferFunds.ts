export class TransferFunds {
    private accountTo: string;
    private accountFrom: string;
    private amount: string;

    constructor(accountFrom: string, accountTo: string, amount: string) {
        this.accountFrom = accountFrom;
        this.accountTo = accountTo;
        this.amount = amount;
    }

    clickInToOption() {
        cy.get('[href="/parabank/transfer.htm"').click()
        cy.get('h1[class="title"]').should("be.visible")
    }

    inputAmount() {
        cy.get("#amount").type(this.amount);
    }
    
    selectSenderAccount() {
        cy.get("#fromAccountId").select(this.accountFrom);
    }

    selectReceiverAccount() {
        cy.get("#toAccountId").select(this.accountTo);
    }

    transfer() {
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