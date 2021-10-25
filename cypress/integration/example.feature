@example
Feature: Example
	As a developer of this application
	I want an example of how to write a functional test using cypress cucumber

	Background: Navigate to homepage
		Given I open the application

	Scenario: Reading the homepage content
		Then I should see the text "Hello, World!"