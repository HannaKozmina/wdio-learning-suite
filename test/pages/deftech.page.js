class DefTechPage {
  get becomeSpeakerBtn() {
    return $('//*[text()="Стати спікером"]');
  }
  get addEventBtn() {
    return $('//*[text()="Додати подію"]');
  }

  async clickOnAddEventBtn() {
    this.addEventBtn.click();
  }
}

export default new DefTechPage();
