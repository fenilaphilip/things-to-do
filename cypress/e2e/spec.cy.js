const baseUrl = "http://localhost:3000/";

describe('To-do-List website', () => {
  it('Checking Elements in head Section', () => {
    cy.visit(baseUrl);

    cy.get("[data-test='TodoList-heading']").should('exist').contains('To-Do-List');

    // for checking current date display
    let today = new Date().toLocaleDateString('en-GB');
    cy.get("[data-test='Current-Date']").contains(`${today}`);
  });
});

