// https://practice.sdetunicorns.com/
import BlogPage from "../pages/components/blog-page.js";

describe('Blog', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await BlogPage.open();

        // Assert title
        await expect(browser).toHaveTitle('Blog – Practice E-Commerce Site');
    });

    it('Get the list of all Recent Posts & assert the length of each item > 10 and assert number of posts = 5', async () => {
        // Open URL
        await BlogPage.open();        

        // Get the Recent Post List Elements
        const recentPostList = await BlogPage.listRecentPosts;

        // Lop through the list and assert text length is greater than 10
        for (const post of recentPostList) {
            const text = await post.getText();
            await expect(text.length).toBeGreaterThan(10);
          }        

        // Assert the total length of the list is 5
        await expect(recentPostList.length).toBe(5);
    });
});