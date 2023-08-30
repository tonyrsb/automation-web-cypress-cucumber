class AtcPage {
    getProductName() {
      return cy.get('h1[title="Iphone 13 128 Gb Garansi Resmi Ibox Tam"]');
    }
    getAtcButton() {
      return cy.get('button[class="c-main-product__action__cart bl-button bl-button--outline bl-button--medium"]');
    }
    getStorageDrodpDown() {
      return cy.get('div[class="multiselect__tags"]');
    }
    getSelectStorage() {
      return cy.get('span[class="multiselect__option multiselect__option--highlight"]');
    }
    getPopUpCart() {
      return cy.get('div[class="c-dialog__panel__title"]');
    }
    getSeeCartButton() {
        return cy.get('button[class="c-cart-dialog__cart-button c-btn c-btn--default c-btn--default c-btn--default"]');
    }
    getCartTitle() {
        return cy.get('p[class="bl-text bl-text--subheading-1 bl-text--semi-bold"]');
    }
    getItemName() {
        return cy.get('span[class="qa-item-name bl-link is-bold"]');
    }
    getNextPaymentBtn() {
        return cy.get('button[class="qa-btn-to-checkout bl-button bl-button--primary bl-button--medium bl-button--block"]');
    }
    getQty() {
        return cy.get('input[class="bl-input-number--input"]');
    }
  }
  
  const atcPage = new AtcPage()
  export default atcPage