
describe('Automation - Working With Drag and Drop', function () {

    it('Cypress Test Case - Understanding Drag and Drop', function () {
  
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');

      cy.wait(5000)


      //first Approach

     // cy.get(sourceitems).drag(targetelement)

      cy.get('#menu-fried-chicken').drag('#plate');

      // //cy.get('').drag('#plate');
      // cy.get('#menu-hamburger').drag('#plate');

      //Second Approach
      const dataTransfer = new DataTransfer();
      cy.get('#menu-ice-cream').trigger('dragstart',{
    
        dataTransfer
      })

      cy.get('#plate-items').trigger('drop',{

        dataTransfer
      })


      cy.get('#menu-hamburger').trigger('dragstart',{
    
        dataTransfer
      })

      cy.get('#plate-items').trigger('drop',{

        dataTransfer
       })
       
       cy.contains('Order Ticket').should("be.visible")

       cy.contains('Reset Order').should("be.visible")

       cy.contains('Reset Order').click()

       cy.get('[id="plate-items"]').should("be.visible")
      
    })

  })