class HomePage {
    getLoginBtn() {
      return cy.get('a[class="sigil-header__nav te-header-login"]');
    }
  
  }
  
  const homePage = new HomePage()
  export default homePage