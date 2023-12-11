export class LogoutAction {
    close() {
        cy.get('[href="/parabank/logout.htm"]').click();
    }
}