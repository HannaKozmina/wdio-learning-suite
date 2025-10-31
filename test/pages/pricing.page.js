class PricingPage {
  get startFreeTrialLink() {
    return $("a.btn-free-trial");
  }
  get compareFeaturesLink() {
    return $('a[href="#compare-features"]');
  }

  async isStartTrialLinkVisible() {
    await this.startFreeTrialLink.waitForDisplayed({ timeout: 5000 });
    return await this.startFreeTrialLink.isDisplayed();
  }

  async clickStartTrialLink() {
    await this.startFreeTrialLink.click();
  }
  async scrollToCompareFeatures() {
    await this.compareFeaturesLink.scrollIntoView();
  }
}

export default new PricingPage();
