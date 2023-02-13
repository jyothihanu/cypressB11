
describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {

      //cy.xpath("//input[@type='checkbox']").should("have.length", 7)
      
      //cy.get('input[type="checkbox"]').check().should('be.checked') //this is multiple checkboxes //generic locator
     // cy.get('#tecnologia1').check().should('be.checked') //this is for particular checkbox (html)

      //cy.xpath('//input[@name="tecnologia2"]').check().should('be.checked') //this is for (css)

      //cy.xpath('//input[@name="tecnologia3"]').check().should('be.checked') //we dont need to do separate checkboxes

      cy.get('input[type="checkbox"]').check(["HTML","CSS","PHP","Python"]).should('be.checked')

      cy.wait(5000)

      cy.get('#check input[type="checkbox"]').uncheck().should('not.be.checked')
        
    })
  })
