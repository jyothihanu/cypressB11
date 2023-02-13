import data from "../../fixtures/login/logincredentials.json"


import DashboardPage from '../../pageobjects/dashboard/dashboardpage.po'

const dash =new DashboardPage()

  describe('verify login functionaity', () => {

    const endpoint ="/web/index.php/auth/login"


    beforeEach(function() {
        cy.visit(endpoint)
        

    });



    after(function () {
        cy.log("all test caes completed");
    });



    it('verify login with valid credentials', () => {
     
        
        //here cy.visit (endpoint)is there but now it is moved to before each at the top of describe

        //actions
       
      cy.login("Admin","admin123")
        


        //assertions

        cy.contains(dash.dashboardheader()).should("be.visible")

        //another assertions

        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")




  
  
    })
  
    it('verify login with invalid credentials', () => {
     
       

        //actions
      cy.login("Admin","admin123")
  
    
 



        //assertions
        
    
       //cy.contains(login.errorMessage()).should("be.visible")
  
    })
  

    
    specify('verify login with invalid username', () => {
     
       

        //actions

       
       // login.loginwithcreds(data.wrongusername,data.password)


        //assertions
       // cy.contains(login.errorMessage()).should("be.visible")
  
    })


    
    it('verify login with invalid username and invalid password', () => {
     cy.viewport("ipad-2","landscape")
        
      

        //actions
       // login.loginwithcreds(data.wrongusername,data.wrongpassword)



        //assertions
      //  cy.contains(login.errorMessage()).should("be.visible")
  
    })
  })