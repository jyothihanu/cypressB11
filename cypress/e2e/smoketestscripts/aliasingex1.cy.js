

describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {

      cy.xpath("//input[@type='checkbox']").should("have.length", 7)
      
      cy.get('#check input[type="checkbox"]')
        .as('checkboxes')
        .check()
        cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })

        cy.log("All the check boxes checked")
        cy.get('@checkboxes').uncheck()
  
      cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(false)
        })
    })
  })