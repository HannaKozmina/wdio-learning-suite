class PricingPage {
  get startFreeTrialLink() {
    return $("a.btn-free-trial");
  }

  async isStartTrialLinkVisible() {
    await this.startFreeTrialLink.waitForDisplayed({ timeout: 5000 });
    return await this.startFreeTrialLink.isDisplayed();
  }

  async clickStartTrialLink() {
    await this.startFreeTrialLink.click();
  }
}

export default new PricingPage();
