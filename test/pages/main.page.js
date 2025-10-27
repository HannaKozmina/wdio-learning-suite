class MainPage {
  get forumBtn() {
    return $('a[href="https://dou.ua/forums/"]');
  }
  get bandBtn() {
    return $('a[href="https://dou.ua/lenta/"]');
  }
  get salariesBtn() {
    return $('a[href="https://jobs.dou.ua/salaries/"]');
  }
  get jobsBtn() {
    return $('a[href="https://jobs.dou.ua/"]');
  }
  get communityBtn() {
    return $('a[href="https://dou.ua/communities/"]');
  }
  get searchInput() {
    return $("#txtGlobalSearch");
  }
  get defTechBtn() {
    return $(".menu-site__deftech");
  }

  async clickOnForumBtn() {
    await this.forumBtn.click();
  }
  async clickOnBandBtn() {
    await this.bandBtn.click();
  }
  async clickOnSalariesBtn() {
    await this.salariesBtn.click();
  }
  async clickOnJobsBtn() {
    await this.jobsBtn.click();
  }
  async clickOnCommunityBtn() {
    await this.communityBtn.click();
  }
  async clickOnDefTechBtn() {
    await this.defTechBtn.click();
  }
  async setSearchInput(value) {
    await this.searchInput.addValue(value);
  }
}

export default new MainPage();
