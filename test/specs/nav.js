// baseUrl = https://practice.sdetuniIcorns.com/
describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        await browser.url('/');
    
        const expectedLinks = [
          "Home",
          "About",
          "Shop",
          "Blog",
          "Contact",
          "My account"
        ];

        const actualLinks = [];
    
        const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]')
        // const navLinks = await $$('#zak-primary-menu li[id*=menu]')

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }
      
        await expect(actualLinks).toEqual(expectedLinks); // using Jest-library (arrays, strings)
    });

    it('Get the text of all menu items & assert them - using wait commands', async () => {
      // hardcoded timeout
      // browser.pause(5000)

      browser.url('/');
  
      const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
      ];

      const actualLinks = [];

      // await $('#zak-primary-menu').waitForDisplayed({timeout: 5000})
      await $('#zak-primary-menu li').waitForClickable()
  
      const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]')
      // const navLinks = await $$('#zak-primary-menu li[id*=menu]')

      for (const link of navLinks) {
          actualLinks.push(await link.getText());
      }
    
      await expect(actualLinks).toEqual(expectedLinks); // using Jest-library (arrays, strings)
    });

    it.only('Get the text of all menu items & assert them - using wait commands', async () => {
      // hardcoded timeout
      // browser.pause(5000)

      browser.url('/');
  
      const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
      ];

      const actualLinks = [];

      // await $('#zak-primary-menu li').waitForClickable()
      // wait until the Home text is displayed on the navigation menu
      await browser.waitUntil(async function(){
        const homeText = await $('#zak-primary-menu li').getText() // Home
        return homeText === "Home"; // true | false
      },{
        timeout: 5000,
        timeoutMsg: 'Could not verify the Home text from #zak-primary-menu li'
      })

  
      const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]')
      // const navLinks = await $$('#zak-primary-menu li[id*=menu]')

      for (const link of navLinks) {
          actualLinks.push(await link.getText());
      }
    
      await expect(actualLinks).toEqual(expectedLinks); // using Jest-library (arrays, strings)
    });
});