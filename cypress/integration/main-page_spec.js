describe('Fowl Prowl main-page', () => {

  beforeEach(() => {
  // cy.visit('http://localhost:3000/')
    cy.intercept('https://fowl-prowl-api.herokuapp.com/api/v1/allBirds',
    { statusCode: 200,
      body: [
      {
"id": 1,
"family": "Paridae",
"common_name": "Fire-capped tit",
"scientific_name": "Cephalopyrus flammiceps",
"description": "The fire-capped tit (Cephalopyrus flammiceps) is a small, 10 cm (3.9 in) long, weighing about 7 g (0.25 oz) bird species assigned to the family Paridae.",
"habitat": "Forest, woodlands and regions with solitary trees",
"fun_fact": "This tit is able to open rolled-up leaves with its beak as starlings do, and hold it with its foot.",
"img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fire-capped_Tit._AMSM0952.jpg/800px-Fire-capped_Tit._AMSM0952.jpg",
"created_at": "2022-04-15T01:11:45.512Z",
"updated_at": "2022-04-15T01:11:45.512Z"
},
{
"id": 3,
"family": "Paridae",
"common_name": "Sultan tit",
"scientific_name": "Melanochlora sultanea",
"description": "The sultan tit (Melanochlora sultanea) is an Asian forest bird with a yellow crest, dark bill, black upperparts plumage and yellow underparts.",
"habitat": "Lowland forests",
"fun_fact": "The recumbent crest is raised when the bird is alert or alarmed.",
"img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sultan_Tit_Mahananda_Wildlife_Sanctuary_Darjeeling%2C_West_Bengal%2C_India.jpg",
"created_at": "2022-04-15T01:11:45.635Z",
"updated_at": "2022-04-15T01:11:45.635Z"
}],
})
.visit('http://localhost:3000/')
  })

  it('Should be able to visit http://localhost:3000 and render a navgivation bar with the title and nav buttons', () => {
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

  it('Should be able to visit http://localhost:3000 and see the bird of the day', () => {
      cy.get('.botd').should('be.visible')
      .get('.learn-btn').should('be.visible')
  });

  it('Should be able to visit http://localhost:3000 and see  cards of all the birds', () => {
    cy.get('.allBirds-container').should('be.visible')
      .get('.card').should('have.length', 2)
      .get('.card').eq(0).contains('Fire-capped tit')
      .get('.icon').eq(0).should('be.visible')
      .get('.learn-btn-card').contains('Learn more')
  });

  it('Should be directed to the main page when user clicks the Home button', () => {
  cy.get('.home-link').click()
    .url().should('include', '/')
});

it('Should be directed to the learn page when user clicks the Learn button', () => {
cy.get('.learn-link').click()
  .url().should('include', '/learn')
});

  it('Should be directed to the lifers page when user clicks the Lifers button', () => {
  cy.get('.lifers-link').click()
    .url().should('include', '/lifers')
});

it('Should be directed to the learn page when user clicks the Add sighting button', () => {
cy.get('.addBird-link').click()
  .url().should('include', '/add-sighting')

})
})
