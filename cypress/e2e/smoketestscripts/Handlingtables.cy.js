

describe('Automation - Working With Tables in webpage', function () {

    it('Cypress Test Case - Understanding Tables in webpage', function () {

        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices');

        cy.xpath("//table[@class='dataTable']/tbody/tr").should('have.length', '30');
        
        
        cy.xpath("//table[@class='dataTable']/tbody/tr[1]/td").should('have.length', '6');

  

        cy.xpath('//table[@class="dataTable"]/tbody/tr[3]').within(() => {

            cy.get('td').eq(2).then((ele) => {

                var value= ele.text()

                cy.log(value)

                expect(value).to.equal("6104.30")
            })

            cy.get('td').eq(0).should('contain.text', ' Bajaj Finance Ltd')

        })



    //     //Validate data based on Cell Values 

        cy.get('.dataTable >tbody').contains('IndusInd Bank Ltd').parent().parent().within(() => {

            cy.get('td').eq(3).then((ele) => {

                cy.log("Prev Price is " + ele.text())

                expect(ele.text()).to.equal("1103.50")
            })
        })

     // // Get entire Table Data
        cy.get('.dataTable >tbody tr')
        .each((rows)=>{

            cy.wrap(rows).within((celldata)=>{

                cy.log(celldata.text())
            })
         })

        })

})


        //cy.get('.datatable tr').should('have.length', 4)

        //or

        // cy.get('.datatable tr').should(($tr) => {
        //     expect($tr).to.have.length(4)
        // })

        //or

        // cy.get('.datatable').then(($table) => {
        //     // synchronously query to find length of elements
        //     expect($table.find('td').length).to.equal(4)
        //   })

        //or

        // cy.get('[ng-repeat="item in catalog"]').then(($el) => { 
        //     const itemCount = Cypress.$($el).length;
        //     cy.log(itemCount)
        // })