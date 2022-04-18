describe('Fowl Prowl main-page', () => {

  beforeEach(() => {
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
.visit('http://localhost:3000/lifers')
  })

  it('Should be able to visit http://localhost:3000/lifers and render a navgivation bar with the title and nav buttons', () => {
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

  it('Should be able to visit http://localhost:3000/lifers and see that there are no lifers saved', () => {
      cy.get('.no-lifers').should('be.visible')
  });

it('Should be able to visit the home page, like a bird, and see that bird card with a colored icon on the lifers page', () => {
    cy.get('.home-link').click()
      .get('.icon').eq(0).click()
      .get('.color-bird').eq(0).should('be.visible')
      .get('.lifers-link').click()
      .get('card').eq(0).should('be.visible')
    })

it.only('Should be able to click the icon to unsave a bird from the lifers page', () => {
    cy.get('.home-link').click()
      .get('.icon').eq(0).click()
      .get('.color-bird').eq(0).should('be.visible')
      .get('.lifers-link').click()
      .get('.card').eq(0).should('be.visible')
      .get('.icon').eq(0).click()
      .get('.no-lifers').should('be.visible')
    })
});
