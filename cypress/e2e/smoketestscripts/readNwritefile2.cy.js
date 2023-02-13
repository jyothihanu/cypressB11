
//import data from "../../fixtures/Login/logincreds.json"

// import Loginpage from "../../pageobjects/loginpage.po"

// const login = new Loginpage()

describe('Verify Login Functionality', () => {

    // let endpoint = "/web/index.php/auth/login"
   
     beforeEach(function () {
       cy.visit(Cypress.env("qaurl"))
   
    
     });
   
     
     after(function () {
       cy.log("all test execution completed")
     });
   
     it.only('Writing Data or Extarcting Data ', () => {
   
       cy.login("Admin", "admin123")
       //Assertion
       cy.contains('Dashboard').should("be.visible")
   
       //Another assertion
   
       cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
       cy.contains("PIM").click();
   
       cy.get('input[class="oxd-input oxd-input--active"]').last().type("0024");
   
       cy.get('button[type="submit"]').click()
       cy.wait(1000)
   
       cy.xpath('//div[@class="oxd-table-card"]/div/div[3]/div').then((txt)=>{
   
           var empname = txt.text();
   
           cy.log(empname)
           cy.writeFile('cypress/fixtures/module3/test.txt', empname)
           cy.writeFile('cypress/fixtures/module3/employee.json', { firstname:empname });
        
       })
   
   
   })
   
   
     it('Add employee test case ', () => {
   
   
   
       //Actions 
       // cy.xpath('//input[@name="username"]').type(Cypress.env("username"))
   
       // cy.xpath('//input[@name="password"]').type(Cypress.env("password"))
       // cy.xpath('//button[@type="submit"]').click();
   
       //login.loginwithcreds(Cypress.env("username"),Cypress.env("password") )
   
       cy.login("Admin", "admin123")
       //Assertion
       cy.contains('Dashboard').should("be.visible")
   
       //Another assertion
   
       cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
       cy.contains("Admin").click();
   
       cy.get('li[class="oxd-topbar-body-nav-tab --parent"]').eq(0).click()
       cy.contains("Job Titles").click()
       
       cy.xpath('//h6[text()="Job Titles"]/../div/button').click()
   
   
       // cy.contains("Add Employee").click()
   
       // cy.AddEmployee("Rajesh", "vgkjdnvkjlbn ")
   
       // cy.contains("Personal Details").should("be.visible")
   
   })
   
     it('Verify Login with Valid creds', () => {
   
   
   
         //Actions 
         // cy.xpath('//input[@name="username"]').type(Cypress.env("username"))
   
         // cy.xpath('//input[@name="password"]').type(Cypress.env("password"))
         // cy.xpath('//button[@type="submit"]').click();
   
         //login.loginwithcreds(Cypress.env("username"),Cypress.env("password") )
   
         cy.login("Admin", "admin123")
         //Assertion
         cy.contains('Dashboard').should("be.visible")
   
         //Another assertion
   
         cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
     })
   
     specify('Verify Login with Invalid creds', () => {
   
   
   
       //Actions 
       // cy.get('input[name="username"]').type(Cypress.env("username"))
       // cy.get('input[type="password"]').type(Cypress.env("wrongpassword"))
       // cy.get('button[type="submit"]').click();
   
       
      // login.loginwithcreds(Cypress.env("username"),Cypress.env("wrongpassword") )
      cy.login("Admin", "admigbfdhbfiun123")
       // //Assetions
   
        cy.contains('Invalid credentials').should("be.visible")
   
   
     })
   
     it('Verify Login with Invalid username', () => {
   
   
       //Actions 
       cy.get('input[name="username"]').type(data.wrongusername)
       cy.get('input[type="password"]').type(data.password)
       cy.get('button[type="submit"]').click();
   
       //Assetions
   
       cy.contains('Invalid credentials').should("be.visible")
   
     })
   
   
   })