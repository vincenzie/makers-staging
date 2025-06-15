/// <reference types="Cypress" />
 
beforeEach(() => {
    cy.loginSession(); // Restore session
    cy.visit('https://staging.makers.to'); // Ensure user is on the correct page
    cy.contains('Welcome, enzo'); // Verify authentication
  });

describe('Create Change Order Flow', function() 
{
 
it('It creates a change order successfully',function() {

cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click() // Click "Create+" dropdown menu
cy.get(':nth-child(3) > [style="padding-left: 10px;"]').click()

cy.get(':nth-child(1) > .MuiGrid-container > .MuiGrid-root > .MuiBox-root > div').click()
cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')

    .type('Cyp'); // Type into the input field


cy.get('.MuiAutocomplete-popper')
  .should('be.visible') // Ensure dropdown is visible
  .contains('CypressAutoCreate3') // Locate the correct option
  .click(); // Click the dropdown item







}  )
 
 
 
}  )