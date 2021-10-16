/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('api integration test', () => {
  // beforeEach(() => {});
  describe('proxy integration test', () => {
    it('should get response on port 80', () => {
      cy.request({
        method: 'GET',
        url: 'localhost:80',
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.empty;
      });
    });
    it('should not get response on port 3000', () => {
      cy.request({
        method: 'GET',
        url: 'localhost:300',
      }).should((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
});
