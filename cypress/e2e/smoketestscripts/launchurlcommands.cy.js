import data from "../../fixtures/login/logincredentials.json"



import DashboardPage from '../../pageobjects/dashboard/dashboardpage.po'


const dash =new DashboardPage()

  describe("verify login functionaity", () => {

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


        

     



  
  
    })              
})