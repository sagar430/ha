const { Given, When, Then } = require('@wdio/cucumber-framework');

import getPageObject from '../pageobjects/getObjects'
import getPageObjectContent from '../pageobjects/getContent'


When('I click on {string}', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
  await browser.pause(5000)
})


When('I wait for {string} to be displayed', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.waitForElement(objectKey)
})

When('I wait for sometime', async function() {
  await browser.pause(5000)
})

Then('I should see {string} displayed', async function(objectKey) {
  const page = await getPageObject(objectKey)
  expect(await page.isElementPresent(objectKey)).to.be.true;
})