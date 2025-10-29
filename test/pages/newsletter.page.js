class NewsletterPage {
  get emailInput() {
    return $('input[name="emailAddress"]');
  }
  get countrySelect() {
    return $('select[name="country"]');
  }
  get subscribeButton() {
    return $('button[type="submit"]');
  }
  get newsletterHeading() {
    return $("#hero-section-brand-heading");
  }
  get subscribeButton() {
    return $('button[type="submit"]');
  }
  get marketingOptInCheckbox() {
    return $("#gated-agree-marketingEmailOptin1");
  }

  async enterEmail(email) {
    await this.emailInput.waitForDisplayed({ timeout: 5000 });
    await this.emailInput.setValue(email);
  }
  async selectCountry(countryCode) {
    await this.countrySelect.waitForDisplayed({ timeout: 5000 });
    await this.countrySelect.selectByAttribute("value", countryCode);
  }
  async isNewsletterHeadingVisible() {
    await this.newsletterHeading.waitForDisplayed({ timeout: 5000 });
    return await this.newsletterHeading.isDisplayed();
  }
  async getNewsletterHeadingText() {
    return await this.newsletterHeading.getText();
  }
  async clickSubscribeButton() {
    await this.subscribeButton.waitForClickable({ timeout: 5000 });
    await this.subscribeButton.click();
  }
  async checkMarketingOptIn() {
    await this.marketingOptInCheckbox.waitForDisplayed({ timeout: 5000 });
    await this.marketingOptInCheckbox.click();
  }
}

export default new NewsletterPage();
