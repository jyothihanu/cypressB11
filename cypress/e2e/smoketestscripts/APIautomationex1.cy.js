
describe('Automation - API Automation - GET. PUT, POST and Delete Methods', function () {

    it.only('Cypress Test Case - Understanding GET Method', function () {
  
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{

        expect(response.status).equal(200);

        expect(response.body).to.have.property('total_pages');
        expect(response.body).to.have.property('total_pages', 2);

        expect(response.body).to.have.property('per_page');
        expect(response.body).to.have.property('per_page', 6);
     
        expect(response.body.data[0].email).equal("michael.lawson@reqres.in");

        expect(response.body.data[5].id).equal(12);

        expect(response.body.data[5].avatar).equal("https://reqres.in/img/faces/12-image.jpg");

        expect(response.body.support.url).equal("https://reqres.in/#support-heading");
        expect(response.body.data[3].first_name).equal("Byron")


      })
      
    })

    it('Cypress Test Case - Understanding GET Method', function () {
  
      cy.request('GET', 'https://reqres.in/api/users/2').then((response)=>{

        expect(response.status).equal(200);
         //comment for demo
      
        expect(response.body.support.url).equal("https://reqres.in/#support-heading");

        expect(response.body.data.id).equal(2)
        expect(response.body.data.email).equal("janet.weaver@reqres.in")
      })
      
    })
    // it('Cypress Test Case - Understanding POST Method', function () {
  

    //     const payload ={
    //         "name": "Raju",
    //         "job": "Trainer"
    //     }
    //     cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{
  
    //       expect(response.status).equal(201);
    //       expect(response.body).to.have.property("name", "Raju")
        
    //       expect(response.body).to.have.property("job", "Trainer")
    //     })
        
    //   })

    it.only('Cypress Test Case - Understanding POST Method', function () {

      
     
    const payload = { "name": "Sreeram","job": "Medical rep"}

        cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{
  
          expect(response.status).equal(201);  
          expect(response.body).to.have.property("name", "Sreeram")
        
          expect(response.body).to.have.property("job", "Medical rep")

          let time = JSON.stringify(response.body.createdAt)
          cy.log(time)

          let idvalue = JSON.stringify(response.body.id)
          cy.log(idvalue)

          cy.writeFile('cypress/fixtures/module1/test6.json', {"Id":idvalue });

      
        })
        
      })

   it.only('Cypress Test Case - Understanding PUT Method', function () {
  
      const payload = {
        "name": "Raju",
        "job": "Consultant"
    }

        cy.request('PUT', 'https://reqres.in/api/users/2', payload).then((response)=>{
  
          expect(response.status).equal(200);
          expect(response.body).to.have.property("name", "Raju")
        
          expect(response.body).to.have.property("job", "Consultant")

          let updatedtime = JSON.stringify(response.body.updatedAt)

          cy.log(updatedtime)
        })
        
      })

      it.only('Cypress Test Case - Understanding DELETE Method', function () {
  
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response)=>{
  
          expect(response.status).equal(204);
         
        })
        
      })
       

      it.only('Cypress Test Case - Understanding PATCH Method', function () {

        const payload1={

            "name": "morpheus",
            "job": "zion resident"
        }
  
        cy.request('PATCH', 'https://reqres.in/api/users/2',payload1).then((response)=>{
  
          expect(response.status).equal(200);
          expect(response.body).to.have.property("name", "morpheus")
        
          expect(response.body).to.have.property("job", "zion resident")

          let updatedtime = JSON.stringify(response.body.updatedAt)
          cy.log(updatedtime)
         
        })
        
      })
  })
  