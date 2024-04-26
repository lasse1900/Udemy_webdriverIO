// https://practice.sdetunicorns.com/
// Practice E-Commerce Site – SDET Unicorns

describe('Home', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        // await expect(browser).toHaveTitle('This is a random title');
    });

    it('Open URL & assert URL', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/about');

        // Assert title
        // await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Click get Started Button and check url contains get-started text', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com');

        // Click get started button
        await $('#get-started').click();

        // Assert title
        // await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click Logo and check url doesn\'t contains get-started text', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com');

        // Click Logo
        await $('//img[@alt="Practice E-Commerce Site"]').click();

        // Assert title
        // await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    it('Find headinf element & asser the text', async () => {
        // Open URL
       await browser.url('https://practice.sdetunicorns.com/about/');

        // get the text
        const headingEl = await $("//h3[normalize-space()='Our Story']");    

        // Find heading element
        const headingText = await headingEl.getText();

        // Assert the text
        //await expect(headingText).toEqual('Our Story')   // Jest library - possible manipulation (no waits/retries directly)
        await expect(headingEl).toHaveText('Our Story');     // wdio expect assertion -validate directly, giving wait & retry
    });
});