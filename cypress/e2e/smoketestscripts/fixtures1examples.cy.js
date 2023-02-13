import register from "../../fixtures/Datadriven/registerdata.json"

import registerpage from "../../pageobjects/register.po"
const regi = new registerpage()

describe('understanding the fixtures - cypress', function () {


  // before(function () {
  //   cy.fixture('register').then(function (data) {
  //     this.data = data;
  //   })
  // })

  it('validate registration', function () {


    cy.visit('https://shop.demoqa.com/my-account/');


    cy.wait(2000)
   // cy.get(regi.usernameinput()).type(register.username)//this data is coming from fixtures
    cy.enterText(regi.usernameinput(),register.username) // here using custom command
    cy.wait(2000)

    //cy.get(regi.emailinput()).type(registerdata.email);
    cy.enterText(regi.emailinput(), register.email) //using custom commands
    cy.wait(2000)

   // cy.get(regi.passwordinput()).type(register.weakpassword)
    cy.enterText(regi.passwordinput(),register.weakpassword) //here alsoo using custom command


    //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
   // cy.get(regi.registerBtninput()).should('have.attr', 'disabled', 'disabled');
       //or
    cy.validateAttribute('.woocommerce-Button','disabled','disabled')

    
   // cy.get(regi.registerBtninput()).should('be.disabled');
    cy.elementTodisabled(regi.registerBtninput())
    cy.wait(2000)

    // Clicking on to register on the Website by entering new password 
    cy.get(regi.passwordinput()).clear()
    cy.wait(5000)

    //cy.get(regi.passwordinput()).type(register.strongpassword);
    cy.enterText(regi.passwordinput(),register.strongpassword)
    cy.wait(2000)
    cy.wait(15000)

   // cy.get(regi.registerBtninput()).click();
    cy.clickonelement(regi.registerBtninput())

    //Checking whether the Registration is successful and whether UserName is populated under login section

    // cy.get(regi.usernameinput()).should('have.value', register.username);
    cy.validateValue(regi.usernameinput(),register.username)

    //or

    //cy.get(regi.usernameinput()).should('have.attr','value',register.username);
    cy.validateAttribute('#reg_username','value',register.username) //here using custom commands.js
   
  })


})



