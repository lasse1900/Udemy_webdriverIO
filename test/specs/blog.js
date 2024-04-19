// https://practice.sdetunicorns.com/

describe('Blog', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await browser.url('/blog');

        // Assert title
        await expect(browser).toHaveTitle('Blog – Practice E-Commerce Site');
    })

    it('Get the list of all Recent Posts & assert the length of each item > 10', async () => {
        // Open URL
        await browser.url('/blog');

        // Get the Recent Post List Elements
        const recentPostList = await $$('#recent-posts-3 ul li')

        // Lop through the list and assert text length is greater than 10
        for (const post of recentPostList) {
            const text = await post.getText()
            await expect(text.length).toBeGreaterThan(10)
          }        

        // Assert the total length of the list is 5
        await expect(recentPostList.length).toBe(5)
    })
})