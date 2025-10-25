import LoginPage from "./../pages/main.page.js";

describe("Webdriverio main page", () => {
  it("should show addValue command", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");

    await LoginPage.setUsernameInput(123);
    await browser.pause(2000);

    await LoginPage.username.addValue("hello");
    await browser.pause(2000);

    await LoginPage.setPasswordInput("superpassword!");
    await browser.pause(2000);

    await LoginPage.clickOnLoginBtn();
    await browser.pause(2000);

    await expect(LoginPage.username).toHaveValue("123hello");
  });
});
