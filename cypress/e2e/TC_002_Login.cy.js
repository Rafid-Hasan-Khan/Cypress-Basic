///<reference types = "Cypress" />

describe('TC_002_Login', () => {
  it('should login and logout from application', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('test')
    cy.get('#loginpassword').type('test')
    cy.get('.btn-primary').contains('Log in').click()
    
  })
})