import { emailNew, passwordNew, usernameNew } from "./../data/credentials";

class SignUpPage {
  get acceptCookiesButton() {
    return $("#wcpConsentBannerCtrl button");
  }
  get welcomeText() {
    return $(".signups-rebrand__container-h1");
  }
  get emailField() {
    return $("#email");
  }
  get passwordField() {
    return $("#password");
  }
  get usernameField() {
    return $("#login");
  }
  get marketingConsentCheckbox() {
    return $("#user_signup\\[marketing_consent\\]");
  }
  get createAccountButton() {
    return $('button[data-target="signup-form.SignupButton"]');
  }

  async acceptCookiesIfVisible() {
    const isBannerVisible = await $("#wcpConsentBannerCtrl").isDisplayed();
    if (isBannerVisible) {
      await this.acceptCookiesButton.click();
    }
  }

  async verifyWelcomeText(expectedText = "Create your free account") {
    await this.welcomeText.waitForDisplayed({ timeout: 5000 });

    const isVisible = await this.welcomeText.isDisplayed();
    if (!isVisible) {
      throw new Error("Welcome text is not visible on the page");
    }

    const actualText = await this.welcomeText.getText();
    if (actualText !== expectedText) {
      throw new Error(
        'Text mismatch: expected "${expectedText}", but got "${actualText}"'
      );
    }

    console.log("Welcome text is displayed and correct");
  }

  async enterEmail() {
    await this.emailField.waitForDisplayed({ timeout: 5000 });
    await this.emailField.setValue(emailNew);
  }

  async enterPassword() {
    await this.passwordField.waitForDisplayed({ timeout: 5000 });
    await this.passwordField.setValue(passwordNew);
  }

  async enterUsername() {
    await this.usernameField.waitForDisplayed({ timeout: 5000 });
    await this.usernameField.setValue(usernameNew);
  }

  async checkMarketingConsent() {
    await this.marketingConsentCheckbox.click();
  }

  async clickCreateAccount() {
    await this.createAccountButton.waitForDisplayed({ timeout: 5000 });
    await this.createAccountButton.scrollIntoView();
    await browser.pause(300);
    //await this.createAccountButton.click(); не получается сделать клик никак 
    //await browser.execute(el => el.click(), await this.createAccountButton);

  }
}

export default new SignUpPage();
