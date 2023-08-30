class SearchProducts {
    getSearchBar() {
      return cy.get('#v-omnisearch__input');
    }
    getBeforeResult() {
      return cy.get('input[class="autosuggest__input--open v-omnisearch__input"]');
    }
    getAfterResult() {
      return cy.get('h1[class="bl-text--subheading-3 bl-text bl-heading bl-heading--h6"]');
    }
  }
  
  const searchProducts = new SearchProducts()
  export default searchProducts