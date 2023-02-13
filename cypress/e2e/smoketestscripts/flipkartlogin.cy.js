

describe('Validate Login Functionality', () => {

    it.only('Validate login with Valid Credentials', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {
  
            return false;
          });
        

      cy.visit('https://www.flipkart.com/')

      cy.contains('Login').click()
    
      cy.get('[class="_2IX_2- VJZDxU"]').type("7337609825")
      cy.contains('Request OTP').click()
     // cy.contains('Please enter the OTP sent to').should("be.visible")
      cy.get('[type="text"])[2]').type("1")
      cy.xpath('(//input[@type="text"])[3]').type("3")
      cy.xpath('(//input[@type="text"])[4]').type("9")
      cy.xpath('(//input[@type="text"])[5]').type("5")
      cy.xpath('(//input[@type="text"])[6]').type("6")
      cy.xpath('(//input[@type="text"])[7]').type("1")
      cy.contains('Verify').click();
      // cy.get('input[type="password"]').type("Rkfjnkjfn")
      // cy.get('button[type="submit"]').last().click()
      // cy.contains("Thimmaraju").should("be.visible")

    })

    it('Validate login with invalid Credentials', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {
  
            return false;
          });
        

      cy.visit('https://www.flipkart.com/')

      cy.contains('Login').click()
      cy.get('input[class="_2IX_2- VJZDxU"]').type("7207774066")
      // cy.get('input[type="password"]').type("bjbfj@2dnqwuhdqhwdiu673")
      // cy.get('button[type="submit"]').last().click()
      // cy.contains("Your username or password is incorrect").should('be.visible')

    })

    it('Validate Search ', () => {

        Cypress.on("uncaught:exception", () => {
  
            return false;
          });
        

      cy.visit('https://www.flipkart.com/')

      cy.get('input[name="q"]').type("Iphone")

      cy.contains("iphone 13").click();


    })

})