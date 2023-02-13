
describe('radiobuttons Test', function () {
    //test case

    it('Working with radiobuttons', function (){
        cy.visit( "https://register.rediff.com/register/register.php")
     
      
    //    //Radio buttons

       // cy.xpath('//input[@value="f"]', {timeout:20000}).check().should('be.checked');
       //or here i'm using another attributes instead of "value=f" i'm using another attribute in the same node
        cy.xpath('//input[starts-with(@name,"gender")][2]').check().should('be.checked')
        cy.xpath('//input[starts-with(@name,"gender")][1]').check().should('be.checked')

    //    //Uncheck will not work for Radio buttons if we want to uncheck first one "male" clicking on "male" doesn't work so we check
        //  second one "female" at that time "male" radiobutton will uncheck

    //    //Dropdowns

        cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("NOV").should('have.value','11') //this is the actions and assertion
        
       //above is using text we do drag and drop
        cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("03").should('have.value','03') //this is using value

        //this is using index
        cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(5).should('have.value','05')
    });
 });