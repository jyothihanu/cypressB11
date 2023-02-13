
describe('Automation - Write file and Read file ', function () {

    it.only('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/fixtures/module2/test4.txt', "Hanvikaram\n")
     
    })

    it.only('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module2/test4.txt', "Cypress Trainer",{flag: 'a+'});
     
    })

    it.only('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module2/test4.json', { firstname: 'Jyothi S', lastname: 'Jyothisreeram'});
     
    })

    it('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
        cy.readFile('cypress/downloads/parrot.jpg').should('exist')

        cy.readFile('cypress/fixtures/module2/test4.json').its('lastname').should('eq','Raju')

         cy.readFile('cypress/fixtures/module2/test4.json').its('firstname').should('eq','G')

         cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Raju');

        cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Cypress Trainer')       
    })

  })