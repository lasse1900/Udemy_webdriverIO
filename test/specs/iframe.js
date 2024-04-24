describe('Working with iFrame', () => {
    it('iFrame test', async () => {
        // Open url
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        // access the iframe
        const iframe = await $('#advanced_iframe')
        await browser.switchToFrame(iframe)

        // verify logo exixt
        try {
            await expect($('.hfe-site-logo')).toExist()
        } catch (error) {
            console.log('---- >>>>>>>>>>>>> Cant\' find the tag >>>>>>>>>>>>>>>>>>  error')
        }

        // switch to parent frame
        await browser.switchToParentFrame()

        // verify page title
        await expect($('h1.zak-page-title')).toHaveText('IFrame Sample')
    });

});