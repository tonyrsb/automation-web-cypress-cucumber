@addToCart
Feature: Bukalapak - Add to Cart

     Background:
          Given I want to go to Home Page
          Then I should be Login

     @addToCart
     Scenario: I want to add product to cart in Bukalapak
          When I go to product detail page
          Then I click add to cart and see Cart popup
          Then I want to see product that i want to buy on My Cart