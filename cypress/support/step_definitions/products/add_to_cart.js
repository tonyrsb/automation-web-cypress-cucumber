const { When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");

const atcPage = require('../../../pageObjects/add_to_cart_page_obj');
const loginPage = require('../../../pageObjects/login_page_obj');

When('I go to product detail page', () => {
    cy.visit(`${Cypress.env('WEBSITE_URL')}/p/handphone/hp-smartphone/iphone/4hlnga4-jual-iphone-13-128-gb-garansi-resmi-ibox-tam?from=list-product&pos=0&keyword=Iphone%2013&funnel=omnisearch&product_owner=normal_seller&cf=1&ssa=0&sort_origin=relevansi&search_sort_default=true&promoted=1&search_query_id=892464b41232f2b17892bc64fd07e99e_577815191_1693382899785&product_slot_type=promoted&is_keyword_typo=false&keyword_expansion=undefined&search_result_size=5032`, {failOnStatusCode: false, chromeWebSecurity: false});
    atcPage.getProductName().should(element => {
        expect(element).to.be.visible;
    });
});

Then('I click add to cart and see Cart popup', () => {
    atcPage.getAtcButton().click();
    atcPage.getPopUpCart().should(element => {
        expect(element).to.be.visible;
    })
});

Then('I want to see product that i want to buy on My Cart', () => {
    atcPage.getSeeCartButton().click();
    atcPage.getCartTitle().should(element => {
        expect(element).to.be.visible;
    });
    atcPage.getItemName().should(element => {
        expect(element).to.be.visible;
    });
    atcPage.getNextPaymentBtn().should(element => {
        expect(element).to.be.visible;
    });
});