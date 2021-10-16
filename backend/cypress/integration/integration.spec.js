/// <reference types="cypress" />

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
        url: 'localhost:3000',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it('should not get response on port 3000', () => {
      cy.visit('http://localhost:3000');
      cy.get('body').should('contain', 'Hello World');
    });
  });
});
