import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I open the application', () => {
  cy.visit('http://localhost:3000/')
})
