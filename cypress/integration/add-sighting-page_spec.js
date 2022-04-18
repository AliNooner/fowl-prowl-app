describe('Add Sighting Page', () => {
  it('Should display a coming soon message', () => {
    cy.visit('http://localhost:3000/add-sighting')
    .contains('Submission form coming soon!')
  });

  it('Should be able to visit http://localhost:3000/add-sighting and render a navgivation bar with the title and nav buttons', () => {
    cy.visit('http://localhost:3000/add-sighting')
    cy.contains('Fowl Prowl')
      .get('.home-link')
      .contains('Home')
      .get('.learn-link')
      .contains('Learn')
      .get('.lifers-link')
      .contains('Your Lifers')
      .get('.addBird-link')
      .contains('Add Sighting')
  });

});
