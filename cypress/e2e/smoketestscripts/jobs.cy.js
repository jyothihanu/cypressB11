import data from "../../fixtures/login/logincredentials.json"
import jobstitledata from "../../fixtures/admin/jobstitledata.json"
import paygradedata  from "../../fixtures/admin/paygradedata.json"
import empstatusdata from "../../fixtures/admin/employmentstatusdata.json"
import jobcategorydata from "../../fixtures/admin/jobcategorydata.json"
import workshiftdata  from "../../fixtures/admin/workshiftdata.json"

  describe('verify job sub module  functionaity', () => {

    const endpoint ="/web/index.php/auth/login"


    beforeEach(function() {
        cy.visit(endpoint)
        
        cy.xpath('//input[@name="username"]').type(data.username)

        cy.xpath('//input[@name="password"]').type(data.password)

       cy.xpath('//button[@type="submit"]').click();
       cy.xpath('(//li[@class="oxd-main-menu-item-wrapper"])[1]').should("be.visible")

        cy.xpath('//a[@href="/web/index.php/admin/viewAdminModule"]').click();
        
        cy.xpath('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click();
        
        
    });






    it('verify add job title functionality', () => {
     
      
        
      



      cy.xpath('(//a[@class="oxd-topbar-body-nav-tab-link"])[1]').click()
          
      cy.xpath('//h6[text( )="Job Titles"]/../div/button').click()
     // cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
      //assertions

      cy.contains('Job Title').should("be.visible")
   

      cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type(jobstitledata.jobtitle) //job title

      

             //assertions
             cy.contains('Job Description').should("be.visible")
             //actions

          cy.xpath('//textarea[@placeholder="Type description here"]').type(jobstitledata.jobdescrption)//job description
          
        
          cy.xpath('//div[@class="oxd-file-button"]').click()

          cy.xpath('//textarea[@placeholder="Add note"]').type(jobstitledata.Addnote)//add note

          cy.contains(' Save ').click()
          //assertions
          

        //assertions

        //cy.contains('Dashboard').should("be.visible")

        //another assertions

        //cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
       
      })

       

        
        


          

         

            
       


  
  
    
  

    

   
      it('verify pay grade  functionality', () => {
     
        
        

          cy.xpath('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click();
          

        //   cy.xpath('(//a[@class="oxd-topbar-body-nav-tab-link"])[2]').click()
          cy.xpath('(//a[@class="oxd-topbar-body-nav-tab-link"])[2]').click()

          cy.xpath('(//button[@type="button"])[2]').click()
          //assertions
          cy.contains('Add Pay Grade').should("be.visible")

          cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type(paygradedata.paygrade)
          cy.contains(' Save ').click()

        })   


        
    it('verify employment status functionality', () => {
     
        
        


         cy.xpath('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click();

         cy.contains('Employment Status').click() // employment status clicking

         cy.contains(' Add ').click() // add button clicking

         //assertions
         cy.contains('Add Employment Status').should("be.visible")
         cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type(empstatusdata.empstatus)
         cy.contains(' Save ').click()
         


       })   

       
    it('verify job categories functionality', () => {
     
        
        

         cy.xpath('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click();

         cy.contains('Job Categories').click()

         cy.contains(' Add ').click()
         //assertions

         cy.contains('Name').should("be.visible")
         cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type(jobcategorydata.jobcategory)
         cy.contains(' Save ').click()
         


       })   


       
    it('verify workshift  functionality', () => {
     
        
        


         cy.xpath('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click();

        cy.contains('Work Shifts').click()
        cy.contains(' Add ').click()
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type(workshiftdata.workshiftname)

        cy.xpath('//input[@placeholder="Type for hints..."]').type(workshiftdata.assignedemployees)

        cy.xpath('//button[@type="submit"]').click()
         


       })  

          
         })          

         

          





  
  
    
    
 