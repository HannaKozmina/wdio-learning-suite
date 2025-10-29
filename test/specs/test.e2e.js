import Header from "../pages/header.page.js";
import SignUpPage from "./../pages/signup.page.js";
import PricingPage from "../pages/pricing.page.js";
import OrganizationPage from "../pages/organization.page.js";

describe("github.com", () => {
  xit("1st scenario: Sign Up", async () => {
    await browser.url("https://github.com");

    await Header.clickOnSignUpBtn();

    await SignUpPage.acceptCookiesIfVisible();

    await SignUpPage.verifyWelcomeText();

    await SignUpPage.enterEmail();

    await SignUpPage.enterPassword();

    await SignUpPage.enterUsername();

    await SignUpPage.checkMarketingConsent();

    await SignUpPage.clickCreateAccount();

    await browser.pause(4000);
  });

  it("2nd scenario: Pricing", async () => {
    await browser.url("https://github.com");

    expect(await Header.isPricingLinkVisible()).toBe(true);
    await Header.clickPricingLink();

    expect(await PricingPage.isStartTrialLinkVisible()).toBe(true);
    await PricingPage.clickStartTrialLink();

    await OrganizationPage.verifyTrialPlanHeaderVisible();

    await OrganizationPage.clickEnterpriseCloudLink();
  });
});
