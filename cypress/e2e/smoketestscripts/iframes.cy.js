
describe('Automation - Working With Iframe', function () {

    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://jqueryui.com/checkboxradio/');

      cy.get('#radio-1').check()
     
    })

    it.only('Select Radio Button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then(($iframe) =>{

           let iframe1 = $iframe.contents().find('label[for="radio-1"]')

           cy.wrap(iframe1).click()
           cy.wait(4000)
        })

       cy.contains("Download").click()
   })


  })
  
 
 
 

 