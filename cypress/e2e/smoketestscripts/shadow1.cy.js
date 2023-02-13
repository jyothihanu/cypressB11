
describe('Automation - Working with shadowroot elements',function (){

    it('Cypress test case - shadow',function(){

        cy.visit('https://books-pwakit.appspot.com/');
        cy.wait(2000)

       // cy.xpath("//input[@id='input']").type('Fiction');
        cy.get('book-app[apptitle="BOOKS"]').shadow()
                   .find('app-header')
                   .find('app-toolbar')
                   .find('app-toolbar')
                   .find('book-input-decorator')
                   .find('#input')
                   .type("fiction").click()
                   cy.url().should('contains',"/explore?q=fiction")
    })
})