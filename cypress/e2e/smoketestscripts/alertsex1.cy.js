
describe ('Automation - working with Alerts', function(){

    beforeEach(()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    })

    it.only('Cypress test case - simple Alert',function(){

        cy.contains('Click for JS Alert').click();
        cy.on('window:alert',(text) => {

            expect(text).equal('I am a JS Alert')
        })
    })

    it.only('Cypress test case - test confirm alert - cancel',function(){

        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm',()=> {

            return false;
        })
    })


    it.only('cypress test case - test confirm alert - ok',function(){

        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm',()=> {

            return true;
        })
    })


    it.only('cypress test case - test prompt alert - ok',function(){

        cy.window().then((win)=> {

            cy.stub(win,'prompt').returns("jyothi S");
            cy.contains('Click for JS Prompt').click();
        })
    })


    it.only('cypress test case - test prompt alert- cancel',function(){

        cy.window().then((win)=> {

            cy.stub(win,'prompt').callsFake(()=> null)
            cy.contains('Click for JS Prompt').click();
        })
    })
})