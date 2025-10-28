class MainPage {
  get signUpBtn() {
    return $(".HeaderMenu-link--sign-up");
  }

  async clickOnSignUpBtn() {
    await this.signUpBtn.click();
  }
}

export default new MainPage();