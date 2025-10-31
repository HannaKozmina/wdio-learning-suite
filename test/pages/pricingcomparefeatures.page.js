class PricingCompareFeatures {
  get compareFeaturesLink() {
    return $('a[href="#compare-features"]');
  }

  get compareFeaturesTitle() {
    return $("h1.h1=Compare features");
  }

  async clickCompareFeaturesLink() {
    await this.compareFeaturesLink.click();
  }

  async scrollToCompareFeaturesTitle() {
    await this.compareFeaturesTitle.scrollIntoView();
  }
}

export default new PricingCompareFeatures();
