///<reference types = "Cypress" />

describe('Cypress E2E Testing Demo', () => {
  it ('passes',() => {

    cy.visit('https://example.com/')
    cy.url().should('contain','example.com')
  })
  it ('Assert Title', () => {
    cy.visit('https://example.com/')
    cy.title().should('contain','Example Domain')

  })
  it ('Assert Element',() =>{
    cy.visit('https://example.com/')
    cy.get('h1').should('be.visible')

  })
  it('Reload and Logs',() =>{
    cy.visit('https://example.com/')
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  })
  
  })