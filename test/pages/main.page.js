class MainPage {
  get subscribeLink() {
    return $('a.btn-muted-mktg[href*="newsletter"]');
  }
  async scrollToSubscribeLink() {
    await this.subscribeLink.scrollIntoView();
  }

  async isSubscribeLinkVisible() {
    await this.subscribeLink.waitForDisplayed({ timeout: 5000 });
    return await this.subscribeLink.isDisplayed();
  }

  async isSubscribeLinkClickable() {
    return await this.subscribeLink.isClickable();
  }

  async clickSubscribeLink() {
    await this.subscribeLink.click();
  }

  async verifySubscribeRedirect() {
    await browser.waitUntil(
      async () =>
        (await browser.getUrl()).includes("resources.github.com/newsletter"),
      {
        timeout: 5000,
        timeoutMsg: "Expected to be redirected to the newsletter page",
      }
    );
  }
}

export default new MainPage();
