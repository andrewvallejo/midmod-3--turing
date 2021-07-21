describe('User Flows', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000')
  })
  it('Should show all reservations upon visit', () => {
    cy.contains('Turing Cafe Reservations')
    cy.get('.resy-container article').should('have.length', 9)
  })

})