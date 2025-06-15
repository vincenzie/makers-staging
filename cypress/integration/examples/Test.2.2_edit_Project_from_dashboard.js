/// <reference types="Cypress" />
 
describe('Login Flow', () => {
  it('Logs in successfully', () => {
    cy.visit('https://staging.makers.to/login');
    cy.get('.css-7hcllo > :nth-child(1)').type('tenzesto@gmail.com');
    cy.get('.css-7hcllo > :nth-child(2)').type('M@kers#69').type('{enter}');
    //cy.get(':nth-child(5) > .MuiButtonBase-root').click();
    //cy.get('[style="padding-top: 30px; padding-bottom: 50px; width: 100%; text-align: center; box-sizing: border-box; position: absolute; bottom: 0px;"]').click();
    cy.url().should('include', '/dashboard'); // Ensure login success
    cy.contains('Welcome, enzo'); // Optional assertion

    //edit project
    cy.get(':nth-child(1) > :nth-child(2) > .MuiTypography-root > div > span').click(); // click on first project in list
    cy.get('.css-oc2bw0 > .MuiGrid2-grid-xs-12 > .MuiFormControl-root > .MuiInputBase-root').type('project summary')


    //add comment
    cy.get('.css-18ua6wv > .MuiGrid2-root > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').type('this is a comment')
    cy.get('.sc-dPWrhe > .MuiButtonBase-root').click()



  });
});