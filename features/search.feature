Feature: Search

  Scenario: As a user, I can search with "<SearchTerm>" 
    Given I go to the "home" page
    And I wait for sometime
    Then I wait for "GamesFeedHeritage" to be displayed
    