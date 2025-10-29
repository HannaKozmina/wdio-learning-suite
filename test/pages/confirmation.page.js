class ConfirmationPage {
  get confirmationHeading() {
    return $('#hero-section-brand-heading');
  }

  async isConfirmationHeadingVisible() {
    await this.confirmationHeading.waitForDisplayed({ timeout: 5000 });
    return await this.confirmationHeading.isDisplayed();
  }

  async getConfirmationHeadingText() {
    return await this.confirmationHeading.getText();
  }
}

export default new ConfirmationPage();
