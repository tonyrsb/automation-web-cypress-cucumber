/* eslint-disable cypress/no-unnecessary-waiting */
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const searchProducts = require('../../../pageObjects/search_products_page_obj');
const loginPage = require('../../../pageObjects/login_page_obj');
const homePage = require('../../../pageObjects/home_page_obj');

When('I click on search bar, I can see Pencarian Popular suggestion popup', () => {
  searchProducts.getSearchBar().click();
  searchProducts.getBeforeResult().should(element => {
    expect(element).to.be.visible;
  });
});

Then('I search from search bar', () => {
    searchProducts.getSearchBar().type('iphone 13{enter}');
});

Then('I got the product lists', () => {
  cy.wait(5000);
  searchProducts.getAfterResult().should(element => {
    expect(element).to.be.visible;
  });
});