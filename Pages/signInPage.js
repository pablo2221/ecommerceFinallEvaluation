import builder from './builder';

class signInPage extends builder {

    /*sign-in page selectors*/

    get createAccountButton() { return $('#create-account_form span'); }
    get emailAddress() { return $('[name=\'email_create\']'); }
    get gender() { return $('#account-creation_form .radio-inline:nth-child(3) [type]'); }
    get firstnameField() { return $('#customer_firstname'); }
    get lastnameField() { return $('#customer_lastname'); }
    get passwordField() { return $('#passwd'); }
    get dateField() { return $('#uniform-days .form-control'); }
    get monthField() { return $('#uniform-months .form-control'); }
    get yearField() { return $('#uniform-years .form-control'); }
    get companyField() { return $('[name=\'company\']'); }
    get address1Field() { return $('[name=\'address1\']'); }
    get address2Field() { return $('[name=\'address2\']'); }
    get cityField() { return $('#city'); }
    get stateField() { return $('#id_state'); }
    get zipcodeField() { return $('#postcode'); }
    get phoneField() { return $('#phone'); }
    get mobileField() { return $('#phone_mobile'); }
    get registerButton() { return $('#submitAccount span'); }
    get signInErrorMessageBox() {return $('#create_account_error'); }
    get emailLoginField() {return $('#email'); }
    get passLoginField() {return $('#passwd'); }
    get LoginButton() {return $('#login_form .submit span'); }
    
    submit() {
        this.createAccountButton.click();
    }

    randomNumbers(){

        var x = Math.floor((Math.random() * 100000) + 1);
        var y = Math.floor((Math.random() * 100000) + 1);

        return (x+'@'+y+'.com')

    }

    //function that simulates account creation process
    genericFormCompleted(){

        this.gender.click();
        this.firstnameField.setValue('Testname');
        this.lastnameField.setValue('Testlastname');
        this.passwordField.setValue('testpassword123');
        this.dateField.selectByIndex(2);
        this.monthField.selectByIndex(6);
        this.yearField.selectByIndex(20);
        this.companyField.setValue('GL');
        this.address1Field.setValue('testaddress1');
        this.address2Field.setValue('testaddress2');
        this.cityField.setValue('citytest');
        this.stateField.selectByIndex(4);
        this.zipcodeField.setValue('10601');
        this.phoneField.setValue('4568956325');
        this.mobileField.setValue('4568956325');
        
    }
}

export default new signInPage();