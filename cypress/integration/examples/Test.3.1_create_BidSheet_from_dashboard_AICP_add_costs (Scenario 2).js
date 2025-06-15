/// <reference types="Cypress" />
 
beforeEach(() => {
  cy.loginSession(); // Restore session
  cy.visit('https://staging.makers.to'); // Ensure user is on the correct page
  cy.contains('Welcome, enzo'); // Verify authentication
});

describe('Create Bid Sheet Flow', function() 
{
 
it('It creates a bid sheet successfully',function() {
 

cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click() // Click "Create+" dropdown menu
cy.get(':nth-child(2) > [style="padding-left: 10px;"]').click() // Click "Bid Sheet" in dropdown

  cy.get('.MuiGrid-container > :nth-child(3) > .MuiBox-root > div').click().wait(2000)
cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')

    .type('cyp'); // Type into the input field


cy.get('.MuiAutocomplete-popper')
  .should('be.visible') // Ensure dropdown is visible
  .contains('CypressAutoCreate3') // Locate the correct option
  .click().wait(10000); // Click the dropdown item

cy.get('[data-testid="ArrowForwardIosRoundedIcon"]')
  .first() // Ensures only the first matching element is clicked
  .click();

cy.get('[data-testid="ArrowForwardIosRoundedIcon"]')
  .eq(1) // Selects the second matching element (zero-based index)
  .click();






}  )
 
 
 
}  )