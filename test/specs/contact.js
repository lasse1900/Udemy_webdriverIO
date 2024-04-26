// https://practice.sdetunicorns.com/
// Practice E-Commerce Site – SDET Unicorns

describe('Contact', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await browsr.url('https://practice.sdetunicorns.com/contact');

        // Assert page text if needed
        // Replace 'selector-for-page-title' with the actual selector (here XPath)
        await expect($("//h1[@class='zak-page-title']")).toHaveText('Contact');
    });

    it('Fill in all the input fields, submit form and assert success message', async () => {
        await browser.url('/contact');

        // Fill out the input fields
        await $('.contact-name input').addValue('Lasse');
        await $('.contact-email input').addValue('lauri.kyttala@gmail.com');
        await $('.contact-phone input').addValue('1212678');
        await $('.contact-message textarea').addValue('Hello You!');

        await $('.evf-submit').click();
        // await $('button[type=submit').click();

        // Assert the success message
        await expect($('.everest-forms-submission-scroll')).toHaveText('Thanks for contacting us! We will be in touch with you shortly'); // validate directly
    });
});
