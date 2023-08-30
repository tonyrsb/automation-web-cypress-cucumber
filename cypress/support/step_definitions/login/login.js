/* eslint-disable cypress/no-unnecessary-waiting */
const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const loginPage = require('../../../pageObjects/login_page_obj');
const homePage = require('../../../pageObjects/home_page_obj');

Given('I want to go to Home Page', () => {
    cy.visit(`${Cypress.env('WEBSITE_URL')}`, {failOnStatusCode: false, chromeWebSecurity: false});
    homePage.getLoginBtn().click();
});

Then('I should be Login', () => {
    loginPage.getEmail().click();
    loginPage.getEmail().type(`${Cypress.env('EMAIL')}`);
    loginPage.getNext().click();
    loginPage.getPassword().click();
    loginPage.getPassword().type(`${Cypress.env('PASSWORD')}`);
    loginPage.getLoginBtn().click();
    loginPage.getImgProfile().should(element => {
      expect(element).to.be.visible;
    });
});