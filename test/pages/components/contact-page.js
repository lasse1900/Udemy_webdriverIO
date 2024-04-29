
class ContactPage {
    open() {
        return browser.url('/contact');
    }

    get inputContact(){
        return $('.contact-name input');
    }

    get inputEmail(){
        return $('.contact-email input');
    }

    get inputPhone(){
        return $('.contact-phone input');
    }

    get txtAreaMessage(){
        return $('.contact-message textarea');
    }

    get btnName(){
        return $('.evf-submit');
    }

    get alertSuccess(){
        return $('.everest-forms-submission-scroll');
    }

    async submitForm(name, email, phone, message){
        await this.inputContact.addValue(name);
        await this.inputEmail.addValue(email);
        await this.inputPhone.addValue(phone);
        await this.txtAreaMessage.addValue(message);
    }
}

export default new ContactPage();
