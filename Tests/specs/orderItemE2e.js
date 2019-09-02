import { expect } from 'chai';
import signInPage from '../../Pages/signInPage';
import mainPage from '../../Pages/mainPage';
import accountPage from '../../Pages/accountPage';


describe('create an account', () => {

    it('should create an user account', () => {

        mainPage.open();
        mainPage.submit();
        signInPage.emailAddress.setValue(signInPage.randomNumbers());
        signInPage.submit();
        signInPage.genericFormCompleted();
        signInPage.registerButton.click();
        accountPage.accountPageHeader.waitForDisplayed(3000);
        expect(accountPage.accountPageHeader.getText()).to.contain('My account');
        browser.saveScreenshot('./Screenshots/E2E_account_creation_successfuly.png');
        
    });

});

describe('order a summer dress item', () => {

    it('should order an item', () => {

        accountPage.womenCategory.click();
        accountPage.dressesOption.click();
        accountPage.summerDresses.click();
        accountPage.product.moveTo(30,60);
        accountPage.addToCart.waitForDisplayed(2000);
        accountPage.addToCart.click();
        accountPage.firstCheckOutButton.waitForDisplayed(2000);
        accountPage.firstCheckOutButton.click();
        accountPage.secondCheckOutButton.waitForDisplayed(2000);
        accountPage.secondCheckOutButton.click();
        accountPage.thirdCheckOutButton.waitForDisplayed(2000);
        accountPage.thirdCheckOutButton.click();
        accountPage.checkboxItem.waitForDisplayed(2000);
        accountPage.checkboxItem.click();
        accountPage.fourthCheckOutButton.waitForDisplayed(2000);
        accountPage.fourthCheckOutButton.click();
        accountPage.bankWireOption.waitForDisplayed(2000);
        accountPage.bankWireOption.click();
        accountPage.confirmOrderButton.waitForDisplayed(2000);
        accountPage.confirmOrderButton.click();
        expect(accountPage.orderConfirmationMessage.getText()).to.contain('ORDER CONFIRMATION');
        browser.saveScreenshot('./Screenshots/E2E_order_item_complete.png');
    });

});


