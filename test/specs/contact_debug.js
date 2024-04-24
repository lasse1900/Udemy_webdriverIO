describe('Contact', () => {
    it('Fill in all the input fields, submit form and assert success message', async () => {
        await browser.url('https://practice.sdetunicorns.com/contact');

        // Fill out the input fields
        await $('.contact-name input').addValue('Lasse')
        await $('.contact-email input').addValue('lauri.kyttala@gmail.com')
        await $('.contact-phone input').addValue('1212678')
        await $('.contact-message textarea').addValue('Hello You!')

        // Printing element out
        // console.log(await $('button[type=submt'))

        // Pause
        // browser.pause(5000)

        // debug
        // await browser.debug()

        // await $('button[type=submt').click();
        await $('button[type=submit').click();

        // Assert the success message
        await expect($('.everest-forms-submission-scroll')).toHaveText('Thanks for contacting us! We will be in touch with you shortly') // validate directly
    });
});
