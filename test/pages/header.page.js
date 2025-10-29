class Header {
  get signUpBtn() {
    return $(".HeaderMenu-link--sign-up");
  }
  get pricingLink() {
    return $('a[href="https://github.com/pricing"]');
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
}

export default new Header();
