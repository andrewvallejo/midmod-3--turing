describe('User Flows', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000')
  })
  it('Should show all reservations upon visit', () => {
    cy.contains('Turing Cafe Reservations')
    cy.get('.resy-container article').should('have.length', 9)
  })
  it('Should be able to book a reservation', () => {
    cy.get('.resy-form > [placeholder="Name"]')
    .should('be.visible')
    .type('Andrew Vallejo')
    cy.get('.resy-form > [placeholder="Date (mm/dd)"]')
    .should('be.visible')
    .type('03/09')
    cy.get('.resy-form > [placeholder="Time"]')
    .should('be.visible')
    .type('7:30')
    cy.get('.resy-form > [type="number"]')
    .should('be.visible')
    .type('4')
    cy.get('.resy-form > button')
    .click()
    cy.get('.resy-container article').should('have.length', 10)
  })
})