import { emailNew, countryCode, searchInput } from "../data/credentials.js";
import Header from "../pages/header.page.js";
import MainPage from "../pages/main.page.js";
import SignUpPage from "./../pages/signup.page.js";
import PricingPage from "../pages/pricing.page.js";
import OrganizationPage from "../pages/organization.page.js";
import NewsletterPage from "../pages/newsletter.page.js";
import ConfirmationPage from "../pages/confirmation.page.js";

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

  xit("2nd scenario: Pricing", async () => {
    await browser.url("https://github.com");

    expect(await Header.isPricingLinkVisible()).toBe(true);
    await Header.clickPricingLink();

    expect(await PricingPage.isStartTrialLinkVisible()).toBe(true);
    await PricingPage.clickStartTrialLink();

    await OrganizationPage.verifyTrialPlanHeaderVisible();

    await OrganizationPage.clickEnterpriseCloudLink();
  });

  xit("3d scenario: Subscribe", async () => {
    await browser.url("https://github.com");

    await MainPage.scrollToSubscribeLink();

    expect(await MainPage.isSubscribeLinkVisible()).toBe(true);
    expect(await MainPage.isSubscribeLinkClickable()).toBe(true);

    await MainPage.clickSubscribeLink();

    await MainPage.verifySubscribeRedirect();

    expect(await NewsletterPage.isNewsletterHeadingVisible()).toBe(true);
    expect(await NewsletterPage.getNewsletterHeadingText()).toBe(
      "Subscribe to our developer newsletter"
    );

    await NewsletterPage.enterEmail(emailNew);

    await NewsletterPage.selectCountry(countryCode);

    await NewsletterPage.checkMarketingOptIn();

    await NewsletterPage.clickSubscribeButton();

    expect(await ConfirmationPage.isConfirmationHeadingVisible()).toBe(true);
    expect(await ConfirmationPage.getConfirmationHeadingText()).toBe(
      "Thanks for subscribing!"
    );

    await browser.pause(4000);
  });

  it("4th scenario: search", async () => {
    await browser.url("https://github.com");

    await Header.openSearch();
    await Header.enterSearchText(searchInput);

    const value = await Header.getSearchValue();
    expect(value).toBe(searchInput);

    await Header.selectSearchResult(searchInput);

    expect(await Header.hasSpecificResult()).toBe(true);
    await browser.pause(4000);
  })
});
