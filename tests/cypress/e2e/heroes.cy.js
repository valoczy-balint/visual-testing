describe('Tour of Heroes app', () => {
  it('should take Percy snapshots', () => {
    cy.visit('http://localhost:4200');
    cy.percySnapshot('Home Page');

    cy.get('nav a').contains('Heroes').click();
    cy.percySnapshot('Heroes List');

    cy.get('.heroes').first().click();
    cy.get('.title').first().should('exist');
    cy.percySnapshot('Hero Details');
  });
});