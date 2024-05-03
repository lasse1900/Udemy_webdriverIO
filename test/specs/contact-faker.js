import ContactPage from "../pages/components/contact-page.js";
import { faker } from '@faker-js/faker';

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
  
        // await ContactPage.submitForm('Lasse','lasse@gmail.com','0156152316','Tere moi!');   
        faker.seed(123); 
        const firstRandom = faker.number.int();
        await ContactPage.submitForm(faker.person.firstName(), faker.internet.email(), faker.string.numeric({ length: { min: 5, max: 10 } }), faker.lorem.paragraphs(2));  

        await ContactPage.btnName.click();
        // await $('button[type=submit').click();

        // Assert the success message
        await expect(ContactPage.alertSuccess).toHaveText('Thanks for contacting us! We will be in touch with you shortly'); 
        // await expect($('.everest-forms-submission-scroll')).toHaveText('Thanks for contacting us! We will be in touch with you shortly'); // validate directly
    });
});
