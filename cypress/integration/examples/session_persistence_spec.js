/// <reference types="Cypress" />

describe('Session Persistence Test', () => {
    it('Checks if login session persists', () => {
      cy.loginSession(); // Calls the global login session
      cy.visit('https://staging.makers.to'); // Visit main page
      cy.contains('Welcome, enzo'); // Verify logged-in state
    });
  });
  