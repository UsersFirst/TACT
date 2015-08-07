Feature: Image Search

	Scenario: Cats have images
		Given I am on google
		When I do an image search for "cats"
		Then my favorite image appears