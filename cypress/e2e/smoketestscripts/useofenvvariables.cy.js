describe("verify login functionaity", () => {

   



    it('verify login with valid credentials', () => {
     
        
        //here cy.visit (endpoint)is there but now it is moved to before each at the top of describe

        //actions
        cy.visit(Cypress.env("clienturl"))
        cy.login(Cypress.env("username"),Cypress.env("password"))


        

     



  
  
    })              
})