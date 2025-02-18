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

  it('Input bar allows users to enter task and it displays on bottom area', () => {
    for (let i = 1; i <= 3; i++) {
      cy.getByData("input-task").type(`task ${i} {enter}`).clear();
      cy.getByData("display-todo").should("have.length", `${i}`);
    }
  });
});

describe('checking all the buttons on page', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.getByData("input-task").type(`01 Task{enter}`);
    cy.getByData("input-task").type(`02 Task{enter}`);
    cy.getByData("input-task").type(`03 Task{enter}`);
  });

  it('AllClear button clears all tasks from display', () => {
    cy.getByData("All-Clear-btn").click();
    cy.getByData("display-todo").should("have.length", 0);
  });

  it('Remove done button clears all finished tasks from display', () => {
    cy.getByData("input-checkbox-01").check();

    cy.getByData("clear-finishedTask-btn").click();
    cy.getByData("display-todo").should("not.have", '01 Task');
  });


  it('Uncheck all tasks button actually unchecks all tasks', () => {
    cy.getByData("input-checkbox-01").check();
    cy.getByData("input-checkbox-03").check();

    cy.getByData("reset-btn").click();

    cy.getByData("input-checkbox-01").should('not.be.checked');
    cy.getByData("input-checkbox-03").should('not.be.checked');
  });

  it('allows task checked, edit and remove', () => {
    cy.getByData("input-checkbox-02").check();
    cy.getByData("task-02")
      .should('have.css', 'text-decoration')
      .should('include', 'line-through');

    cy.getByData("input-checkbox-02").uncheck();
    cy.getByData("task-02")
      .should('have.css', 'text-decoration')
      .should('include', 'none');

    cy.getByData("edit-btn-03").click();
    cy.getByData("edit-taskInput-03")
      .should('have.value', '03 Task')
      .click()
      .should('have.focus');

    cy.getByData("remove-btn-01").click();
    cy.getByData("display-todo").should("not.have.text", `01 Task`);

  });
});

