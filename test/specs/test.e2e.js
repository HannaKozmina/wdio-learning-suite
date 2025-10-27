import MainPage from "./../pages/main.page.js";
import DefTechPage from "../pages/deftech.page.js";
import AddEventDefTechPage from "./../pages/addEventDeftech.page.js";
import JobsPage from "./../pages/jobs.page.js";
import SalariesPage from "./../pages/salaries.page.js";
import CommunityPage from "./../pages/community.page.js";

describe("dou.ua", () => {
  xit("done", async () => {
    await browser.url("https://dou.ua");

    await MainPage.clickOnBandBtn();
    await browser.pause(2000);

    await MainPage.clickOnForumBtn();
    await browser.pause(2000);

    await MainPage.clickOnDefTechBtn();
    await browser.pause(2000);

    await DefTechPage.clickOnAddEventBtn();

    expect(AddEventDefTechPage.head).toHaveValue("Нова подія");
  });

  xit("Salaries", async () => {
    await browser.url("https://dou.ua");

    await MainPage.clickOnSalariesBtn();
    await browser.pause(2000);

    await SalariesPage.isKvart1LblDisplayed();
  });

  xit("Jobs", async () => {
    await browser.url("https://dou.ua");

    await MainPage.clickOnJobsBtn();
    await browser.pause(2000);

    await JobsPage.clickOnSearchBtn();
    await browser.pause(2000);

    await JobsPage.isQuickAccessDisplayed();
  });

  it("Community", async () => {
    await browser.url("https://dou.ua");

    await MainPage.clickOnCommunityBtn();
    await browser.pause(2000);

    await CommunityPage.isGameDevCommuntityDisplayed();
    await CommunityPage.isFrontEndCommunityDisplayed();
    await CommunityPage.isDevOpsCommunityDisplayed();
    await CommunityPage.isQACommunityDisplayed();
  });
});
