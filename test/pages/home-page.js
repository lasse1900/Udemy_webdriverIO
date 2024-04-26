import NavComponent from "./components/nav-comp.js";

class HomePage {
    open() {
        return browser.url('/');
    }

    get btnGetStarted(){
        return $('#get-started');
    }

    get imageLogo(){
        return $('//img[@alt="Practice E-Commerce Site"]');
    }

    get txtHeading(){
        return $("//h3[normalize-space()='Our Story']");
    }

    getHeadingText() {
        const headingEl = this.txtHeading;
        const headingText = headingEl.getText();
        return (headingText);
    }

    get NavComponent() {
        return NavComponent;
    }
}

export default new HomePage();

