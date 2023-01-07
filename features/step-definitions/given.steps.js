const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I go to the {string} page', async (site) => {
    if(site=="home"){
        await browser.url(`/`)
    }
    else{
        await browser.url(`/tv/${site}`)
   }
});