class LoginPage {
  getEmail() {
    return cy.get('#LoginID');
  }
  getNext() {
    return cy.get('#submit_button');
  }
  getPassword() {
    return cy.get('#Password');
  }
  getLoginBtn() {
    return cy.get('#btn-login');
  }
  getImgProfile() {
    return cy.get('div[class="bl-avatar sigil-avatar"]');
  }
}

const loginPage = new LoginPage()
export default loginPage