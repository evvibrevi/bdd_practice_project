import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';

Given('I am on the login page', async () => {
  await browser.url('https://practicetestautomation.com/practice-test-login/');
});

When('I enter username {string}', async (username: string) => {
  await $('#username').setValue(username);
});

When('I enter password {string}', async (password: string) => {
  await $('#password').setValue(password);
});

When('I click the submit button', async () => {
  await $('#submit').click();
});

Then('I should be redirected to the success page', async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes('logged-in-successfully'),
    {
      timeout: 5000,
      timeoutMsg: 'Expected to be redirected to the success page',
    }
  );
});

Then('I should see a message containing {string}', async (text: string) => {
  const message = await $('.has-text-align-center strong');
  const actual = (await message.getText()).toLowerCase();
  expect(actual).toContain(text.toLowerCase());
});

Then('the {string} button should be visible', async (text: string) => {
  const button = await $(`button*=${text}`);
  expect(await button.isDisplayed()).toBe(true);
});

Then('I should see an error message {string}', async (errorMsg: string) => {
  const errorElement = await $('#error');
  expect(await errorElement.isDisplayed()).toBe(true);
  expect(await errorElement.getText()).toBe(errorMsg);
});
