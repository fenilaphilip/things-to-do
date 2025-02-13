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

  it('allows users to enter task and it displays', () => {
    for (let i = 1; i <= 3; i++) {
      cy.getByData("input-task").type(`task ${i} {enter}`).clear();
      cy.getByData("display-todo").should("have.length", `${i}`);
    }
  });

  it.only('allows task checked and remove', () => {
    cy.getByData("input-task").type(`Task 1 {enter}`);
    cy.getByData("input-checkbox").check();
    cy.getByData("remove-btn").click();

  })
});

