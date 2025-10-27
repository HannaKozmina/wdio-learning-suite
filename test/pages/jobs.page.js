class JobsPage {
  get searchBtn() {
    return $(".btn-search");
  }
  get QuickAccess() {
    return $('//*[text()="Швидкий перехід:"]');
  }

  async clickOnSearchBtn() {
    this.searchBtn.click();
  }
  async isQuickAccessDisplayed() {
    return await this.QuickAccess.isDisplayed();
  }
}

export default new JobsPage();
