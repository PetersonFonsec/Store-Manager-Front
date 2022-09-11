/// <reference types="cypress"/>

describe('Provider - register', () => {
  function login() {
    cy.visit('http://localhost:4200/signup/login');
    cy.get('#email').type('email@valid.com');
    cy.get('#password').type('Password123!');
    cy.get('.button').click();
    cy.visit('http://localhost:4200/signin/fornecedores');
  }

  before(() => {
    login();
    cy.reload();
  });

  it('Should visit the product page', () => {
    cy.title().should('be.equal', 'Storage Manager | Fornecedores');
  });

  it('Should show the dialog when click in create button', () => {
    cy.get('[color="red"] > .button').click();
    cy.get('.mat-dialog-container').should('exist');
  });

  it('Should disable submit button when required fields is empty', () => {
    cy.get('#provide-name').clear();
    cy.get('#provide-representative').clear();
    cy.get('#provide-email').clear();
    cy.get('#provide-cellphone').clear();
    cy.get('#provide-submit-button > .button').should('be.disabled');
  });

  it('Should close dialog when register product', () => {
    cy.get('#provide-photo').click();
    cy.get('#provide-name').type('Empresa');
    cy.get('#provide-representative').type('Enzo empresario');
    cy.get('#provide-email').type(`enzo${Math.random()}@empresa.com`);
    cy.get('#provide-cellphone').type(
      Math.random().toFixed(11).replace('.', '0'),
    );
    cy.get('#provide-submit-button').click();
  });

  it('Should exist new product', () => {
    cy.get('.ng-star-inserted > .item').should('exist');
  });

  it('Should search product by name', () => {
    cy.get('#input-search').type('Bala juquinha');
    cy.get('#button-search').click();
    cy.get('.ng-star-inserted > .item').should('exist');
  });
});
