const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^Nava is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Nava login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Nava should see home page$/, async () => {
    await HomePage.validateHomePage()
})

Then(/^Nava should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
})

//Then 