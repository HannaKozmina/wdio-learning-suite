class CommunityPage {
  get GameDevCommunity() {
    return $('a[href="https://gamedev.dou.ua/?from=fpcommunity"]');
  }
  get FrontEndCommunity() {
    return $(
      'a[href="https://dou.ua/forums/tags/Front-end/?from=fpcommunity"]'
    );
  }
  get DevOpsCommunity() {
    return $('a[href="https://dou.ua/forums/tags/DevOps/?from=fpcommunity"]');
  }
  get QACommunity() {
    return $('a[href="https://dou.ua/forums/tags/QA/?from=fpcommunity"]');
  }

  async isGameDevCommuntityDisplayed() {
    return await this.GameDevCommunity.isDisplayed();
  }
  async isFrontEndCommunityDisplayed() {
    return await this.FrontEndCommunity.isDisplayed();
  }
  async isDevOpsCommunityDisplayed() {
    return await this.DevOpsCommunity.isDisplayed();
  }
  async isQACommunityDisplayed() {
    return await this.QACommunity.isDisplayed();
  }
}

export default new CommunityPage();
