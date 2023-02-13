
///<reference types="cypress"/>


describe('Automation - File Upload Example - 2', function () {

    it.only('Cypress Test Case - Understanding upload file - 2', function () {

      Cypress.on("uncaught:exception", (err, runnable) => { // uncaught exception 
  
        return false;
      });
  
      cy.visit('https://the-internet.herokuapp.com/upload');

      cy.get('#file-upload').attachFile('admin/taj mahal.jpg');
      
    //  cy.fileupload('//*[@id="file-upload"]','module1/test.txt')
      cy.get('#file-submit').click();

      cy.get('#uploaded-files').contains('taj mahal.jpg')
    
    })

     // // Import 

    it('Cypress Test Case - Understanding Download file', function () {
  
        cy.downloadFile("https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-rose-red-plant_420x.jpg?v=1634228232", "cypress/downloads" , "nurserylive-rose-red" )
        cy.readFile('cypress/downloads/nurserylive-rose-red').should('exist')
      
       })

      it.only('Cypress Test Case - Understanding Download file - PDF ', function () {
  
        cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB-CTFL_Syllabus_2018_v3.1.1.pdf", "cypress/jyothi" , "ISTQBsyllabus.pdf" )
        
        cy.wait(2000)
        cy.readFile('cypress/jyothi/ISTQBsyllabus.pdf').should('exist')
      
      })

    //   // Export 

  })