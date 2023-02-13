
describe('checkbox Test', function () {
    //test case

    it('Working with Check boxes', function (){
     
       cy.visit("https://register.rediff.com/register/register.php");       

       cy.xpath('//input[starts-with(@name,"chk_altemail")]', {timeout:20000}).check()
       cy.xpath('//input[starts-with(@name,"chk_altemail")]').should('be.checked')

       cy.wait(10000)

       cy.xpath('//input[starts-with(@name,"chk_altemail")]',{timeout:20000}).uncheck()

       cy.xpath('//input[starts-with(@name,"chk_altemail")]').should('not.be.checked');

    //    //Radio buttons

        cy.xpath('//input[@value="f"]', {timeout:20000}).check().should('be.checked');
        cy.xpath('//input[starts-with(@name,"gender")][2]').check().should('be.checked')

    //    //Uncheck will not work for Radio

    //    //Dropdowns

    //    cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("SEP")

        
    });
 });