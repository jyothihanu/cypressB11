

describe('verify login functionaity', () => {



    beforeEach(function () {
        cy.visit(Cypress.env("qaurl"))



    });



    after(function () {
        cy.log("all test caes completed");
    });



    it('conditional testing - if  ', () => {



        cy.login("Admin", "admin123") //here using custom command feature

        //assertions

        cy.contains('Dashboard').should("be.visible")

        //another assertions

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains("PIM").click()
        cy.wait(3000)

        cy.get('body').then(($body) => {
            if ($body.find('[class="oxd-table-cell oxd-padding-cell"]').length > 0) { //here when we type find we use only css locators


                cy.get('input[class="oxd-input oxd-input--active"]').last().type("0221")
               
            }
            else {
              cy.log("No table Data")
            }
        })






    })


    it('conditional testing - else  ', () => {



        cy.login("Admin", "admin123") //here using custom command feature

        //assertions

        cy.contains('Dashboard').should("be.visible")

        cy.title().should('eq','OrangeHRM')

        //another assertions

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains("PIM").click()
        cy.wait(3000)

        cy.get('body').then(($body) => {
            if ($body.find('jyothi s').length > 0) { //here when we type find we use only css locators


             cy.get('input[class="oxd-input oxd-input--active"]').last().type("0221")
               
            }
            else {
              cy.log("No table Data")
            }
        })






    })


})