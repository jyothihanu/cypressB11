
describe("select box", () => {

    it("should load website with select box", () => {

        Cypress.on("uncaught:exception", (err, runnable) => {  // this is uncaught exception syntax

            return false;
        });



        cy.visit("https://chercher.tech/practice/dropdowns");

        cy.get("#order-changed").select("Yahoo"); //this is using text

        cy.get("#order-changed").select("Microsoft");//this is using value

        cy.get("#order-changed").select(3); //this is using index

    });

});