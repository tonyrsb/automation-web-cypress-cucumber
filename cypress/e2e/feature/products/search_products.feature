@searchProduct
Feature: Bukalapak - Search Product
     Background:
          Given I want to go to Home Page
          Then I should be Login

     @searchProduct
     Scenario: I want to search SKU in Bukalapak
          When I click on search bar, I can see Pencarian Popular suggestion popup
          Then I search from search bar
          Then I got the product lists