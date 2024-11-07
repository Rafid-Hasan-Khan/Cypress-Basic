///<reference types = "Cypress" />

describe('TC_003_Product_Detail', () => {
  it('Should verify the product details displayed', () => {

   // cy.visit('https://demoblaze.com/')
    //cy.get('.hrefch').contains('Nexus 6').click()
   // cy.get('.product-deatil').should('be.visible')
    //cy.get('h2.name').contains('Nexus 6').should('be.visible')
    //cy.get('h3.price-container').should('contain','$650')
     //cy.get('.btn-success').should('contain','Add to cart')
    
    //cy.visit('https://demoblaze.com/')
   // cy.get('.hrefch').contains('Samsung galaxy s6').click()
   // cy.get('.product-deatil').should('be.visible')
    //cy.get('h2.name').contains('Samsung galaxy s6').should('be.visible')
    //cy.get('h3.price-container').should('contain','$360')
   // cy.get('.btn-success').should('contain','Add to cart')


   cy.visit('https://demoblaze.com/')
   cy.get('.list-group-item').contains('Laptops').click()
   cy.get('.hrefch').contains('Dell i7 8gb').click()
   cy.get('.product-deatil').should('be.visible')
   cy.get('h2.name').contains('Dell i7 8gb').should('be.visible')
   cy.get('h3.price-container').should('contain','$700')
   cy.get('.btn-success').should('contain','Add to cart')



   

  })
})