const baseUrl = "http://localhost:3000/";

describe('To-do-List website', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('displays in head Section', () => {

    cy.getByData("TodoList-heading").should('exist').contains('To-Do-List');
    let today = new Date().toLocaleDateString('en-GB');
    cy.getByData("Current-Date").contains(`${today}`);
  });

  it('allows users to enter task', () => {
    cy.getByData("input-task").type('task1').type('{enter}');
  });

});

