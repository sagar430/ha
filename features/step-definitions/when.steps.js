const { Given, When, Then } = require('@wdio/cucumber-framework');

import getPageObject from '../pageobjects/getObjects'
import getPageObjectContent from '../pageobjects/getContent'

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    
});

When('I enter {string} in {string} field', async function(stringValue, objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, await getPageObjectContent(stringValue))
})

When('I enter a unique email into the {string} field', async function(objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, "testuser" + (new Date().getTime()).toString(36)+"@gmail.com")
})

When('I enter an invalid unique email into the {string} field', async function(objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, "testuser" + (new Date().getTime()).toString(36)+"@gmail")
})

When('I enter a username into the {string} field', async function(objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, "testuser")
})

When('I enter an invalid username into the {string} field', async function(objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, "alfksjsd@gmail")
})

When('I enter a password into the {string} field', async function(objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, "testpassword1234")
})

When('I enter an invalid password into the {string} field', async function(objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, "//////")
})