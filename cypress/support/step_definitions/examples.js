const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("input[type=text]").should(
    "have.attr",
    "placeholder",
    `${Cypress.env('WORD')}`
  );

  assert.deepEqual({}, {});
  
});
