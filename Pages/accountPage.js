import builder from './builder';

class accountPage extends builder {

    /*accountPage used selectors*/

    get accountPageHeader() { return $('.navigation_page'); }
    get signOutButton() { return $('nav .header_user_info:nth-of-type(2) [rel]'); }
    get womenCategory() { return $('#block_top_menu > ul:nth-child(2) > li:nth-of-type(1) > .sf-with-ul:nth-of-type(1)'); }
    get confirmButton(){return $('//span[contains(text(), \"Proceed to checkout\")]');}
    get dressesOption(){return $('#block_top_menu > ul:nth-child(2) > li:nth-of-type(2) .sf-with-ul');}
    get summerDresses(){return $('#subcategories li:nth-of-type(3) [width]');}
    get product(){return $('.first-item-of-mobile-line');}
    get quickView(){return $('.quick-view');}
    get addToCart(){return $('a[class=\'button ajax_add_to_cart_button btn btn-default\']');}
    get firstCheckOutButton(){return $('a[class=\'btn btn-default button button-medium\']');}
    get secondCheckOutButton(){return $('a[class=\'button btn btn-default standard-checkout button-medium\']');}
    get thirdCheckOutButton(){return $('button[class=\'button btn btn-default button-medium\']');}
    get checkboxItem(){return $('#uniform-cgv');}
    get fourthCheckOutButton(){return $('button[name=\'processCarrier\']');}
    get bankWireOption(){return $('a[class=\'bankwire\']');}
    get confirmOrderButton(){return $('button[class=\'button btn btn-default button-medium\']');}
    get orderConfirmationMessage(){return $('h1[class=\'page-heading\']');}
    
}

export default new accountPage();

