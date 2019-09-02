import builder from './builder';

/*mainPage used selectors*/ 

class mainPage extends builder {

    get signInButton() { return $('.header_user_info [rel]'); }
    

    open() {
        super.open('http://automationpractice.com/index.php');
    }

    submit() {
        this.signInButton.click();
    }

}

export default new mainPage();