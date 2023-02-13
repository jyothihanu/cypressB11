
describe("visiting webpage using cypress",() => {


    before(function () {
        cy.log("before all");
    });


    after(function () {
        cy.log("after all");
    });


    beforeEach(function() {
        cy.log("before each");
    });

    afterEach(function () {
        cy.log("after each");
    });



    it("should visit the page", () => {
           
        cy.log("1st IT block");
        cy.visit("https://www.google.com/");
    
    });


    it("dummy block 2nd it block",() => {
        cy.log("2nd IT block");
    });
    
    
    it("dummy block 3rd it block",() => {
        cy.log("3rd IT block");
    });
    


    

    

    
});