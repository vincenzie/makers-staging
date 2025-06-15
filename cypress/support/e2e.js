console.info('e2e.js support file loaded');
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Debugging wrapper for ResizeObserver
const OriginalResizeObserver = window.ResizeObserver;
window.ResizeObserver = class extends OriginalResizeObserver {
  constructor(callback) {
    const wrappedCallback = (entries, observer) => {
      console.info('ResizeObserver triggered for:', entries.map(entry => entry.target));
      debugger; // Execution will pause here for inspection; remove when done debugging.
      callback(entries, observer);
    };
    super(wrappedCallback);
  }
};

console.info('e2e.js support file loaded – ResizeObserver override applied');

// SUPPRESS ResizeObserver errors with one combined handler.
const resizeObserverErrorRe = /ResizeObserver loop (limit exceeded|completed with undelivered notifications)/;
Cypress.on('uncaught:exception', (err) => {
  if (resizeObserverErrorRe.test(err.message)) {
    return false; // Prevents Cypress from failing the test.
  }
});

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Commands.add('loginSession', () => {
  cy.session('userSession', () => {
    cy.visit('https://staging.makers.to/login');
    cy.get('.css-7hcllo > :nth-child(1)').type('tenzesto@gmail.com');
    cy.get('.css-7hcllo > :nth-child(2)').type('M@kers#69').type('{enter}');
    cy.get(':nth-child(5) > .MuiButtonBase-root').click();
    cy.url().should('include', '/dashboard'); // Verify login success
  });
  cy.log('Session restored');
});
  
  