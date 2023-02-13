
 

 describe("select box", () => {

    it("should load website with select box", () => {
      
       
  Cypress.on("uncaught:exception", (err, runnable) => {
  
    return false;
  });

      cy.visit("https://chercher.tech/practice/dropdowns");

      cy.get("#order-changed").select("Microsoft");

    });
    
  });