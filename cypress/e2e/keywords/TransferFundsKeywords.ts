import { TransferFundsPage } from '../pages/TransferFundsPage';

export class TransferFundsKeywords {
    transferFunds(amount: string, fromAccount: string, toAccount: string) {
        const transferFundsPage = new TransferFundsPage();
        transferFundsPage.clickInToOption();
        transferFundsPage.inputAmount(amount);
        transferFundsPage.selectFromAccount(fromAccount);
        transferFundsPage.selectToAccount(toAccount);
        transferFundsPage.submit();
    }
}
