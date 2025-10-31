class Header {
  get signUpBtn() {
    return $(".HeaderMenu-link--sign-up");
  }
  get pricingLink() {
    return $('a[href="https://github.com/pricing"]');
  }
  get mobileSearchTrigger() {
    return $(".octicon-search");
  }
  get desktopSearchTrigger() {
    return $('[data-target="qbsearch-input.inputButtonText"]');
  }
  get searchInput() {
    return $("#query-builder-test");
  }
  get specificSearchResult() {
    return $("span.search-match=tonyzhaozh/act");
  }

  async clickOnSignUpBtn() {
    await this.signUpBtn.click();
  }
  async isPricingLinkVisible() {
    await this.pricingLink.waitForDisplayed({ timeout: 5000 });
    return await this.pricingLink.isDisplayed();
  }
  async clickPricingLink() {
    await this.pricingLink.click();
  }
  async openSearch() {
    if (await this.mobileSearchTrigger.isDisplayed()) {
      await this.mobileSearchTrigger.click();
    } else if (await this.desktopSearchTrigger.isDisplayed()) {
      await this.desktopSearchTrigger.click();
    }
    await this.searchInput.waitForDisplayed();
  }
  async enterSearchText(text) {
    await this.searchInput.setValue(text);
  }
  async getSearchValue() {
    return await this.searchInput.getValue();
  }
  async selectSearchResult(text) {
    const result = $(`span.QueryBuilder-ListItem*=${text}`);
    await result.waitForDisplayed();
    await result.click();
  }
  async hasSpecificResult() {
    const result = await this.specificSearchResult;
    const text = await result.getText();
    return text.includes("act");
  }
  
}

export default new Header();
