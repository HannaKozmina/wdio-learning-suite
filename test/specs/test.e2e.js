import MainPage from "./../pages/main.page.js";
import SignUpPage from "./../pages/signup.page.js";

describe("github.com", () => {
  
    it("SignUp", async () => {
        await browser.url('https://github.com');

        await MainPage.clickOnSignUpBtn();

        await SignUpPage.acceptCookiesIfVisible();

        await SignUpPage.verifyWelcomeText();

        await SignUpPage.enterEmail();

        await SignUpPage.enterPassword();

        await SignUpPage.enterUsername();

        await SignUpPage.checkMarketingConsent();

        await SignUpPage.clickCreateAccount();

        

        await browser.pause(4000);
    })
});
