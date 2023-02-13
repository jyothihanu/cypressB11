
///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');



      cy.xpath('//input[@name="upfile"]').attachFile('admin/taj mahal.jpg');

      cy.xpath('//input[@type="text"]').type('taj mahal image'); //this is notes about choosen file
      
      //cy.fileupload("//input[@name='upfile']",'PIM/unnamed.png')
	  
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible") //this is assertion point  or verification point
    })

  })