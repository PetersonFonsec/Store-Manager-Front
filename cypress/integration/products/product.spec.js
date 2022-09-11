/// <reference types="cypress"/>

describe('Product - register', () => {
  function login() {
    cy.visit('http://localhost:4200/signup/login');
    cy.get('#email').type('email@valid.com');
    cy.get('#password').type('Password123!');
    cy.get('.button').click();
    cy.visit('http://localhost:4200/signin/produtos');
  }

  before(() => {
    cy.reload();
  });

  it('Should visit the product page', () => {
    login();
    cy.title().should('be.equal', 'Storage Manager | Products');
  });

  it('Should show the dialog when click in create button', () => {
    cy.get('[color="red"] > .button').click();
    cy.get('.mat-dialog-container').should('exist');
  });

  it('Should disable submit button when required fields is empty', () => {
    cy.get('#productName').clear();
    cy.get('#productDescription').clear();
    cy.get('#productPriceBuy').clear();
    cy.get('#productPriceSell').clear();
    cy.get('app-form-product > form  .button').should('be.disabled');
  });

  it('Should close dialog when register product', () => {
    cy.get('#productName').type('Bala juquinha' + Math.random());
    cy.get('#productDescription').type('Bala que os maias comiam');
    cy.get('#productPriceBuy').type(0.01);
    cy.get('#productPriceSell').type(0.1);
    cy.get('.input-photo').click();
    cy.get('app-form-product > form  .button').click();
    cy.get('.mat-dialog-container').should('not.exist');
  });

  it('Should exist new product', () => {
    cy.get('.ng-star-inserted > .item').should('exist');
  });

  it('Should disable search button when disabled field search', () => {
    cy.get('.input-text').clear();
    cy.get('[type="submit"] > .button').should('be.disabled');
  });

  it('Should search product by name', () => {
    cy.get('.input-text').type('Bala juquinha');
    cy.get('[type="submit"] > .button').click();
    cy.get('.ng-star-inserted > .item').should('exist');
  });
});
