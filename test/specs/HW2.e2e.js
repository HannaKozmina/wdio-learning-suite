import { browser, expect } from '@wdio/globals'

describe('my homework', () => {

    xit("should check API link", async () => {
        await browser.url('https://webdriver.io');

        let apiLink = await $('nav a[href="/docs/api"]');
        await apiLink.click();
        await browser.pause(4000);

    });

    xit("should check some elements", async () => {
        await browser.url('https://webdriver.io/docs/api');

        let blog = await $('footer a[href="/blog"]');
        await blog.scrollIntoView();
        await browser.pause(4000);

        await expect(blog).toBeDisplayed();
        
        await browser.waitUntil(async () => {
            return await $('.pagination-nav__label').isDisplayed()
        }, 3000, "Link is not displayed");

        const protocolCommands = await $('.pagination-nav__link--next');
        let clickable = await protocolCommands.isClickable();
        console.log("Is clickable: " + clickable);

    });

    xit("shoul wait until 'Web Driver Protocol' is appear", async () => {
        await browser.url('https://webdriver.io/docs/api');

        const link = await $('.pagination-nav__link--next');
        await link.click();

        await browser.waitUntil(async () => {
            return $('#webdriver-protocol').isDisplayed()
        }, {
            timeout: 5000,
            timeoutMsg: "Protocol is NOT displayed"
            });
            
    });

});

