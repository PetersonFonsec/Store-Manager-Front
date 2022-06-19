/// <reference types="cypress"/>

describe('Login - screen', () => {
  before(() => {
    cy.visit('http://localhost:4200/signup/login');
  });

  beforeEach(() => {
    cy.reload();
  });

  it('Should visti page and valid title', () => {
    cy.title().should('be.equal', 'Storage Manager | Login');
  });

  it('Should disabled submit button when form is empty', () => {
    cy.get('.button').should('be.disabled', true);
  });

  it('Should change input type when clicked for show password', async () => {
    cy.get('#password').should('have.attr', 'type', 'password');
    await cy.get('.svg-inline--fa').click();
    cy.get('#password').should('have.attr', 'type', 'text');
  });

  it('Should show error in input email when value is an invalid email', async () => {
    await cy
      .get('#email')
      .type('emailinvalid')
      .then(($el) => {
        cy.get('.error').and('have.text', 'Email invalido');
      });
  });

  it('Should enable submit when form is valid', async () => {
    cy.get('#email').type('email@valid.com');
    cy.get('#password').type('password123');
    cy.get('.button').should('be.enabled');
  });
});
