class DuckgoPage {
    getDuckgoText() {
      return cy.get('input[type=text]').should(
        "have.attr",
        "placeholder",
        "Search the web without being tracked"
      );;
    }
  }
  
const duckgoPage = new DuckgoPage()
export default duckgoPage