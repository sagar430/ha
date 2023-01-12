const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I go to the {string} page', async (site) => {
    if(site=="home"){
        await browser.url(`/`)
    }
    else{
        await browser.url(`/tv/${site}`)
   }
});

Given('I see {string} displayed', async function(objectKey) {
    const page = await getPageObject(objectKey)
    expect(await page.isElementPresent(objectKey)).to.be.true;
  })

  Given('I should see {string} displayed after successfully logging in', async function(objectKey) {
    const page = await getPageObject(objectKey)
    expect(await page.isElementPresent(objectKey)).to.be.true;
  })