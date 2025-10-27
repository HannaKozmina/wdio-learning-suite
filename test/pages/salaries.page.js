class SalariesPage {
  get kvart1Lbl() {
    return $('#q1 h4');
  }

  async isKvart1LblDisplayed() {
    return await this.kvart1Lbl.isDisplayed();
  }
}

export default new SalariesPage();
