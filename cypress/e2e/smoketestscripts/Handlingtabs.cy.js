
describe('Automation - Working With Tabs in webpage', function () {

    it('Cypress Test Case - Understanding Tabs in webpage', function () {

             
  Cypress.on("uncaught:exception", (err, runnable) => {
  
    return false;
  });

  
      cy.visit('https://www.cypress.io/');

      cy.wait(5000);
      
      //cy.get('[href="https://on.cypress.io/configuration"]').click({force:true})

      cy.get('[href="https://on.cypress.io/configuration"]').invoke('removeAttr','target').click({force:true})
       cy.wait(5000);

     cy.url().should('include', 'https://docs.cypress.io/guides/references/configuration')

     cy.go(-1)

     cy.go(1)
     cy.go(-2)


    
      
    })

  })