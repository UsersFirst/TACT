Feature: Google Search


  @auto_doc
  Scenario: I can search google
    Given I visit "https://www.google.com"
    And I type "cats" in the google search box
    And I submit my search
    And I wait for "2" seconds
    When I select the first google result
    Then the current url includes "wikipedia"

  Scenario: Here is an example scenario
  	Given I am someone
  	When I try something
  	Then something happens