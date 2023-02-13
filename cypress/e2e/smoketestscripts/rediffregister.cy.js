
describe('Validate rediff website Functionality', () => {

    it.only('Validate rediff registration website', () => {

      cy.visit('https://register.rediff.com/register/register.php')

      cy.get('[valign="bottom"]').should("be.visible")
      cy.contains('Create a Rediffmail account').should("be.visible")
      cy.xpath('//input[starts-with(@name,"name")]').type("jyothisreeram")
      cy.xpath('//input[starts-with(@name,"login")]').type("jyothisganga98@gmail.com")
      cy.xpath('//input[starts-with(@name,"passwd")]').type("jyo@1998")
      cy.xpath('//input[starts-with(@name,"confirm_passwd")]').type("jyo@1998")
      cy.xpath('//input[starts-with(@name,"altemail")]').type("jyothisganga98@gmail.com")
      cy.xpath('//input[starts-with(@name,"mobno")]').type("7337609825")
      cy.xpath('//select[starts-with(@name,"DOB_Day")]').select('value="02"').should('have.value','02')
    
    
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