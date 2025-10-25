import { browser, expect } from '@wdio/globals'

describe('my homework', () => {
    xit("should have correct URL after API click", async () => {
        await browser.url('https://webdriver.io');

        let apiLink = await $('=API');
        await browser.pause(2000);
        await apiLink.click();
        await browser.pause(4000);

        await expect(browser).toHaveUrl('https://webdriver.io/docs/api');

    });
    
    xit("should have Introduction title", async () => {
        await browser.url('https://webdriver.io/docs/api');

        let introTitle = await $('header').$('h1').getText();
        console.log('Header text is:' + introTitle);

        await expect(introTitle).toBe('Introduction');

    });

    xit("should have Introduction in breadcrumbs", async () => {
        await browser.url('https://webdriver.io/docs/api');

        const activeBreadcrumb = await $('.breadcrumbs__item--active');
        const text = await activeBreadcrumb.getText();
        console.log('Text is: ' + text);

        await expect(text).toBe('Introduction');

    });

    xit("should have correct href attribute for WebDriver", async () => {
        await browser.url('https://webdriver.io/docs/api');

        const links = await $('a=WebDriver');
        const attrib = await links.getAttribute('href');
        
        console.log('Href =' + attrib);

        await expect(attrib).toBe("/docs/api/webdriver");
        
    });

    xit("should click on search field", async () => {
        await browser.url('https://webdriver.io/docs/api');

        let searchButton = await $('.DocSearch-Button-Placeholder');
        await searchButton.click();
        await browser.pause(2000);
        
    });

    xit("should setValue in search field and clear it", async () => {
        await browser.url('https://webdriver.io/docs/api');

        let searchButton = await $('.DocSearch-Button-Placeholder');
        await searchButton.click();

        let inputSearch = await $('.DocSearch-Input');
        await inputSearch.setValue('Example');
        let valueBeforeClear = await inputSearch.getValue();
        await expect(valueBeforeClear).toBe('Example');

        let closeButton = await $('[aria-label="Clear the query"]');
        await closeButton.click();
        let valueAfterClear = await inputSearch.getValue();
        await expect(valueAfterClear).toBe('');
        
    });
    
});

