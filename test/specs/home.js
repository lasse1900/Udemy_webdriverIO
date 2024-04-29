import HomePage from "../pages/components/home-page.js";

describe('Home', () => {

    // before(async () => {
    //     console.log("THIS COULD BE USED FOR THE TEST SETUP");
      
    // });

    beforeEach(async () => {
        console.log("THIS RUNS BEFORE EACH");        
        // Open URL
        await HomePage.open(); 
    });

    // after(async () => {
    //     console.log("THIS COULD BE USED FOR TEST CLEAN UP");        
    // });

    // afterEach(async () => {
    //     console.log("THIS RUNS AFTER EACH TEST");        
    // });    

    it('Open URL & assert title', async () => {
        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('Open URL & assert URL', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/about');

        // Assert title
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Click get Started Button and check url contains get-started text', async () => {              
        // Click get started button
        await HomePage.btnGetStarted.click();

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    }); 

    it('Click Logo and check url doesn\'t contains get-started text', async () => {
        // Click Logo
        await HomePage.imageLogo.click();

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('Find heading element & assert the text', async () => {
        // Open URL
       await browser.url('https://practice.sdetunicorns.com/about/');

        // Find heading element
        const headingEl = await HomePage.txtHeading;

        // get the text
        const headingText = await headingEl.getText();

        // Assert the text
        await expect(headingText).toEqual('Our Story');   // Jest library - possible manipulation (no waits/retries directly)
        await expect(headingEl).toHaveText('Our Story');     // wdio expect assertion -validate directly, giving wait & retry
    });
});
