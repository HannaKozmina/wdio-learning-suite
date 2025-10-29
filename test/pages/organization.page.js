class OrganizationPage {
  get trialPlanHeader() {
    return $("h1=Pick your trial plan");
  }
  get enterpriseCloudLink() {
    return $('a[href*="/enterprise/trial/start"]');
  }

  async verifyTrialPlanHeaderVisible() {
    await this.trialPlanHeader.waitForDisplayed({ timeout: 5000 });
    expect(await this.trialPlanHeader.isDisplayed()).toBe(true);
  }
  async clickEnterpriseCloudLink() {
    await this.enterpriseCloudLink.waitForDisplayed({ timeout: 5000 });
    await this.enterpriseCloudLink.click();
  }
}
export default new OrganizationPage();
