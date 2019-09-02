import { expect } from 'chai';
import signInPage from '../../Pages/signInPage';
import mainPage from '../../Pages/mainPage';
import accountPage from '../../Pages/accountPage';

describe('valid login', () => {

    it('should validate succesful login', () => {

        mainPage.open();
        mainPage.submit();
        signInPage.emailLoginField.setValue('pablix2221@gmail.com');
        signInPage.passLoginField.setValue('hola1234');
        signInPage.LoginButton.click();
        expect(accountPage.accountPageHeader.getText()).to.contain('My account');
        browser.saveScreenshot('./Screenshots/succesful_signIn.png');
    });

});