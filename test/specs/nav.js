// baseUrl = https://practice.sdetunicorns.com/
describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        await browser.url('/');
    
        const expectedLinks = [
          "Home",
        ];

        const actualLinks = [];
    
        // const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await $('#zak-primary-nav').$$('li[id*=menu-item-489]');

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
          }
      
        await expect(expectedLinks).toEqual(actualLinks);
      });

})