import { OpenNewAccountPage } from '../pages/OpenNewAccountPage';

export class OpenNewAccountKeywords {
    openNewAccount(type: string, account: string) {
        const openNewAccountPage = new OpenNewAccountPage();
        openNewAccountPage.clickInToOption();
        openNewAccountPage.selectTypeAccount(type);
        openNewAccountPage.selectAccountReference(account);
        openNewAccountPage.submit();
        openNewAccountPage.getAccountId();
    }
}
