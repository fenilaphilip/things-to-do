const baseUrl = "http://localhost:3000/";

describe('To-do-List website', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  const insert_task = () => {
    cy.getByData("input-task").type(`01 Task{enter}`);
    cy.getByData("input-task").type(`02 Task{enter}`);
    cy.getByData("input-task").type(`03 Task{enter}`);
  };

  context('Head section', () => {
    it('displays heading in head Section', () => {
      cy.getByData("TodoList-heading").should('exist').contains('To-Do-List');
    });

    it('displays date in head Section', () => {
      let today = new Date().toLocaleDateString('en-GB');
      cy.getByData("Current-Date").contains(`${today}`);
    });
  });

  context('User Input area', () => {
    it('Input bar allows users to enter task and it displays on bottom area', () => {
      for (let i = 1; i <= 3; i++) {
        cy.getByData("input-task").type(`task ${i} {enter}`);
        cy.getByData("display-todo").should("have.length", `${i}`);
      }
    });

    it('not possible to create task without a text', () => {
      cy.getByData("input-task").type(`{enter}`);
      cy.getByData("display-todo").should("have.length", 0);
    });
  });

  context('Info area', () => {
    it('gives info about press Enter', () => {
      cy.getByData("display-todo")
        .should("have.length", 0)
        .then(() => {
          cy.getByData('info-text')
            .find('p')
            .contains(`Press 'Enter' to add task!`);
        });
    });

    it('gives info about how many tasks to complete', () => {
      insert_task();
      cy.getByData("input-checkbox-01").check();
      cy.getByData("input-checkbox-03").check();

      cy.getByData('info-text')
        .find('p')
        .contains(`1 more tasks to finish!`);

      cy.getByData("input-checkbox-03").uncheck();
      cy.getByData('info-text')
        .find('p')
        .contains(`2 more tasks to finish!`);
    });

    it('gives well done when complete all tasks', () => {
      insert_task();
      cy.getByData("input-checkbox-01").check();
      cy.getByData("input-checkbox-02").check();
      cy.getByData("input-checkbox-03").check();

      cy.getByData('info-text')
        .find('h3')
        .contains(`Well done !`)
        .contains(`You completed all your tasks`);
    })

  });

  context('Display task area', () => {
    beforeEach(insert_task);
    it('allows tasks individually checked und unchecked, changing styles', () => {
      for (let i = 1; i <= 3; i++) {
        cy.getByData(`input-checkbox-0${i}`).check();
        cy.getByData(`task-0${i}`)
          .should('have.css', 'text-decoration')
          .should('include', 'line-through');

        cy.getByData(`input-checkbox-0${i}`).uncheck();
        cy.getByData(`task-0${i}`)
          .should('have.css', 'text-decoration')
          .should('include', 'none');
      }
    });

    it('allows to edit a task', () => {
      for (let i = 1; i <= 3; i++) {
        cy.getByData(`edit-btn-0${i}`).click();
        cy.getByData(`edit-taskInput-0${i}`)
          .should('have.value', `0${i} Task`)
          .click()
          .should('have.focus')
          .type(' can edit');
        cy.getByData(`edit-btn-0${i}`).click();
        cy.getByData("display-todo").contains(`0${i} Task can edit`);
      }
    });

    it('allows to remove specific task', () => {
      cy.getByData(`remove-btn-02`).click();
      cy.getByData("display-todo")
        .should("not.have.text", `02 Task`)
        .should('contain', '03 Task')
        .and('contain', '01 Task');
    });

  });

  context('Settings buttons', () => {
    beforeEach(insert_task);
    it('AllClear button clears all tasks from display', () => {
      cy.getByData("All-Clear-btn").click();
      cy.getByData("display-todo").should("have.length", 0);
    });

    it('Remove done button clears all finished tasks from display', () => {
      cy.getByData("input-checkbox-01").check();
      cy.getByData("input-checkbox-03").check();

      cy.getByData("clear-finishedTask-btn").click();
      cy.getByData("display-todo")
        .should("not.have.text", '01 Task')
        .should("not.have.text", '03 Task')
        .contains('02 Task');
    });

    it('Uncheck all tasks button actually unchecks all tasks', () => {
      cy.getByData("input-checkbox-01").check();
      cy.getByData("input-checkbox-03").check();

      cy.getByData("reset-btn").click();

      cy.getByData("input-checkbox-01").should('not.be.checked');
      cy.getByData("input-checkbox-03").should('not.be.checked');
    });
  });

});

