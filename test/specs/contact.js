import ContactPage from "../pages/components/contact-page.js";

describe('Contact', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await ContactPage.open(); 

        // Assert page text if needed
        // Replace 'selector-for-page-title' with the actual selector (here XPath)
        await expect($("//h1[@class='zak-page-title']")).toHaveText('Contact');
    });

    it('Fill in all the input fields, submit form and assert success message', async () => {
        await ContactPage.open(); 
  
        await ContactPage.submitForm('Lasse','lasse@gmail.com','0156152316','Tere moi!');    

        await ContactPage.btnName.click();
        // await $('button[type=submit').click();

        // Assert the success message
        await expect(ContactPage.alertSuccess).toHaveText('Thanks for contacting us! We will be in touch with you shortly'); 
        // await expect($('.everest-forms-submission-scroll')).toHaveText('Thanks for contacting us! We will be in touch with you shortly'); // validate directly
    });
});
