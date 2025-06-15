/// <reference types="Cypress" />

beforeEach(() => {
  cy.loginSession(); // Restore session
  cy.visit('https://staging.makers.to'); // Ensure user is on the correct page
  cy.contains('Welcome, enzo'); // Verify authentication
});

 
describe('Create Project Flow', function() 
{
 
it('It creates a project successfully',function() {

cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
cy.get('[tabindex="0"] > [style="padding-left: 10px;"]').click()
cy.get('.css-on6a9g > :nth-child(1)').type('the big enz')  // Input project name

//Dynamic Dropdown
cy.get('.css-on6a9g > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root input')
  .type('makers'); // Type into the input field

// Wait for the dropdown options to appear and find "Makers Central"
cy.get('.MuiAutocomplete-popper')
  .should('be.visible') // Ensure dropdown is visible
  .contains('Makers Central') // Locate the correct option
  .click(); // Click the dropdown item



cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
  .type('digital'); // Type into the input field


cy.get('.MuiAutocomplete-popper')
  .should('be.visible') // Ensure dropdown is visible
  .contains('Digital') // Locate the correct option
  .click(); // Click the dropdown item

  cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .type('in'); // Type into the input field


cy.get('.MuiAutocomplete-popper')
  .should('be.visible') // Ensure dropdown is visible
  .contains('In Production') // Locate the correct option
  .click(); // Click the dropdown item


  cy.get('.MuiGrid2-container > :nth-child(3) > .MuiButtonBase-root').click() // clicks "create" and creates project

  cy.get('.MuiGrid2-root > .MuiBox-root > div').click() // clicks on "create bid sheet"
  cy.get('.MuiGrid-container > :nth-child(3) > .MuiBox-root > div').click().wait(5000)
  cy.url().should('include', '/bids'); // Ensure bid sheet created and displayed
   // cy.contains('Welcome, enzo'); // Optional assertion
















}  )
 
 
 
}  )