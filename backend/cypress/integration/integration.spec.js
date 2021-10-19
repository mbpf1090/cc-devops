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
    it.skip('[skipped] should not get response on port 3000', () => {
      // does not work, as whe are getting connrefused instead of a 404
      cy.request({
        method: 'GET',
        url: 'localhost:3000',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it('should open UI on port 80', () => {
      cy.visit('http://localhost:80');
      cy.get('body').should('contain', 'Hello World');
    });
  });
});
