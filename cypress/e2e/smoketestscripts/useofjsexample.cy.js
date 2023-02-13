describe('demo of use of JS', () => {


    it('use of JS in ccypress', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  
      cy.get('button[type="button"]').eq(11).click()
      cy.get('button[type="button"]').eq(12).click()

      cy.get(" table > tbody > tr:nth-child(2) > td:nth-child(3) > strong").then($txt => {
        var totalprice = $txt.text()

         var  totalpricenumber =Number(totalprice)
         cy.log(typeof(totalpricenumber))
         cy.log(totalpricenumber)

         cy.get('img[alt="Cart"]').click()

         cy.get(' div.cart > div.cart-preview.active > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(1) > div.product-total > p.amount').then($txt => {
         var firstitemprice = Number($txt.text())
 
 
 
          //var  firstitempricenumber =Number(firstitemprice)
         //cy.log(typeof(firstitempricenumber))
         //cy.log(firstitempricenumber)
 
         
     cy.get(' div.cart > div.cart-preview.active > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > div.product-total > p.amount').then($txt => {
         var seconditemprice = Number($txt.text())
 
 
 
         // var seconditempricenumber =Number(seconditemprice)
         //cy.log(typeof(seconditempricenumber))
        // cy.log(seconditempricenumber)
         
        const totalamount =firstitemprice+seconditemprice
 
         cy.log(totalamount)
 
         expect(totalpricenumber).to.equal(totalamount)
     })
         
     })
     })
   
        
    })
      
      
    
  
  })