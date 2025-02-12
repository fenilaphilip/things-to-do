const baseUrl = 'http://localhost:3000/';

describe('My first test', () => {
  it('visit the website : passes', () => {
    cy.visit(baseUrl);
  })
})