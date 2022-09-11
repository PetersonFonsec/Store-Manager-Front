/// <reference types="cypress"/>

describe('Register - screen', () => {
  before(() => {
    cy.visit('http://localhost:4200/signup/register');
  });

  beforeEach(() => {
    cy.reload();
  });

  it('Should visti page and valid title', () => {
    cy.title().should('be.equal', 'Storage Manager | Cadastre-se');
  });

  it('Should disabled submit button when form is empty', () => {
    cy.get('.button').should('be.disabled', true);
  });

  it('Should change input type when clicked for show password', async () => {
    cy.get('.input-text > #password').should('have.attr', 'type', 'password');
    await cy
      .get(
        ':nth-child(3) > .ng-invalid > .input-text > .ng-fa-icon > .svg-inline--fa > path',
      )
      .click();
    cy.get('.input-text > #password').should('have.attr', 'type', 'text');
  });

  it('Should change input type when clicked for show confirm password', async () => {
    cy.get('.input-text > #confirm_password').should(
      'have.attr',
      'type',
      'password',
    );
    await cy
      .get(
        ':nth-child(4) > .ng-invalid > .input-text > .ng-fa-icon > .svg-inline--fa > path',
      )
      .click();
    cy.get('.input-text > #confirm_password').should(
      'have.attr',
      'type',
      'text',
    );
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
    cy.get('#name').type('peterson');
    cy.get('#email').type('email@valid.com');
    cy.get('#password').type('password123');
    cy.get('#confirm_password').type('password123');
    cy.get('.button').should('be.enabled');
  });

  it('Should redirect to dashboard page', async () => {
    cy.get('#name').type('peterson');
    cy.get('#email').type('email@valid.com');
    cy.get('#password').type('Password123!');
    cy.get('#confirm_password').type('Password123!');
    cy.get('.button').click();
    cy.title().should('be.equal', 'Storage Manager | Dashboard');
  });
});
