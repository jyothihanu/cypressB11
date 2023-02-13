
//import data from "../../fixtures/login/logincredentials.json"
//import Loginpage from "../../pageobjects/loginpage.po";
//const login = new Loginpage()

  describe('verify login functionaity', () => {

   // const endpoint ="/web/index.php/auth/login"


    beforeEach(function() {
        cy.visit("/")
        
        
        
    });



    after(function () {
        cy.log("all test caes completed");
    });



    it('verify login with valid credentials', () => {
     
        
        //here cy.visit (endpoint)is there but now it is moved to before each at the top of describe

        //actions
    

        //  cy.xpath('//input[@name="username"]').type(data.username)

        //  cy.xpath('//input[@name="password"]').type(data.password)

        //  cy.xpath('//button[@type="submit"]').click();
        cy.login("Admin","admin123") //here using custom command feature

        //assertions

        cy.contains('Dashboard').should("be.visible")

        //another assertions

        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")




  
  
    })
  
    it('verify login with invalid credentials', () => {
     
       

        //actions
        

        // cy.get('input[name="username"]').type(data.username)

        //  cy.get('input[name="password"]').type(data.wrongpassword)

        // cy.get('button[type="submit"]').click();
        cy.login("Admin","fhgujhkj")


        //assertions
      // cy.contains("Invalid credentials").should("be.visible")
      // cy.xpath('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]').should("be.visible")
       //cy.xpath("//*[text()='Invalid credentials']").should("be.visible")
       cy.elementToVisible("//*[text()='Invalid credentials']")

  
    })
  

    
    specify('verify login with invalid username', () => {
     
       

        //actions

        // cy.get('input[name="username"]').type(data.wrongusername)

        // cy.get('input[name="password"]').type(data.password)

        // cy.get('button[type="submit"]').click();


        //assertions
       // cy.contains(login.errorMessage()).should("be.visible")
  
    })


    
    it('verify login with invalid username and invalid password', () => {
     
        

         //actions

        // cy.get('input[name="username"]').type(data.wrongusername)

        // cy.get('input[name="password"]').type(data.wrongpassword)

        // cy.get('button[type="submit"]').click();


         //assertions
        // cy.contains(login.errorMessage()).should("be.visible")
  
    })
  })