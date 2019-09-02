import { expect } from 'chai';
import signInPage from '../../Pages/signInPage';
import mainPage from '../../Pages/mainPage';

describe('validate existing e-mail user account', () => {

    it('should validate error message when trying to create a new account using an existing email', () => {
        
        mainPage.open();
        mainPage.submit();
        signInPage.emailAddress.setValue('pablix2221@gmail.com');
        signInPage.submit();
        signInPage.signInErrorMessageBox.waitForDisplayed(3000);
        expect(signInPage.signInErrorMessageBox.getText()).to.contain('An account using this email address');
        browser.saveScreenshot('./Screenshots/Create_account_error_message.png');

    });

});




