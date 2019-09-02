export default class builder {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url(path);
        browser.fullscreenWindow();
    }
}