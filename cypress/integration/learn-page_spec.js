
describe('Fowl Prowl Learn-page', () => {
	beforeEach(() => {
		cy.intercept('https://fowl-prowl-api.herokuapp.com/api/v1/allBirds', {
			statusCode: 200,
			body: [
				{
					'id': 45,
					'family': 'Bop',
					'common_name': 'Magnificent Riflebird',
					'scientific_name': 'Ptiloris magnificus',
					'description':
						'The male is velvet-black with elongated black filamental flank plumes, an iridescent blue-green crown, a triangle-shaped breast shield, and on central tail feathers.',
					'habitat':
						'Lowland rainforests of New Guinea and the northern Cape York Peninsula of Australia',
					'fun_fact':
						'During courtship displays, the male fully extends his wings and raises his tail; he jerks upward while swinging his head from side to side, showing off his metallic blue-green breast shield, and producing a distinctive "woosh" sound as he flaps his wings.',
					'img_url':
						'https://upload.wikimedia.org/wikipedia/commons/1/10/Magnificent_Riflebird.jpg',
					'created_at': '2022-04-15T01:11:45.832Z',
					'updated_at': '2022-04-15T01:11:45.832Z',
				},
				{
					'id': 35,
					'family': 'Falconidae',
					'common_name': 'Nankeen kestrel',
					'scientific_name': 'Falco cenchroides',
					'description':
						'The Nankeen kestrel is a small, slim falcon 28 to 35 cm (11 to 14 in) long with a wingspan of 66 to 78 cm (26 to 31 in).',
					'habitat':
						'temperate grasslands and open woodlands of Australia and New Guinea',
					'fun_fact':
						"The Nankeen kestrel is one of the smallest falcons, and unlike many, does not rely on speed to catch it's prey.",
					'img_url':
						'https://upload.wikimedia.org/wikipedia/commons/8/82/Falco_cenchroides_Flickr.jpg',
					'created_at': '2022-04-15T01:11:45.803Z',
					'updated_at': '2022-04-15T01:11:45.803Z',
				},
				{
					'id': 3,
					'family': 'Paridae',
					'common_name': 'Sultan tit',
					'scientific_name': 'Melanochlora sultanea',
					'description':
						'The sultan tit (Melanochlora sultanea) is an Asian forest bird with a yellow crest, dark bill, black upperparts plumage and yellow underparts.',
					'habitat': 'Lowland forests',
					'fun_fact':
						'The recumbent crest is raised when the bird is alert or alarmed.',
					'img_url':
						'https://upload.wikimedia.org/wikipedia/commons/7/7e/Sultan_Tit_Mahananda_Wildlife_Sanctuary_Darjeeling%2C_West_Bengal%2C_India.jpg',
					'created_at': '2022-04-15T01:11:45.635Z',
					'updated_at': '2022-04-15T01:11:45.635Z',
				},
			],
		})
			.visit('http://localhost:3000/')
			.get('.learn-link')
			.click()
	})

	it('Should be able to see 3 birds', () => {
		cy.get('.learn-page').get('.card').should('have.length', 3)
	})

	it('Should be able to visit the learn page and see the Paridae family', () => {
		cy.get('.learn-page')
			.find('.family-title')
			.contains('The Paridae Family:')
			.get('.card')
			.contains('Sultan tit')
			.should('be.visible')
	})

	it('Should be able to visit the learn page and see the the Paradisaeidae family', () => {
		cy.get('.learn-page')
			.find('.family-title')
			.contains('The Paradisaeidae Family')
			.get('.card')
			.contains('Magnificent Riflebird')
			.should('be.visible')
	})

	it('Should be able to visit the learn page and see the the Falconidae family', () => {
		cy.get('.learn-page')
			.find('.family-title')
			.contains('The Falconidae Family')
			.get('.card')
			.contains('Nankeen kestrel')
			.should('be.visible')
	})

	it('Should be able to click the Learn More link on a card and be taken to a url that contains that birds id', () => {
		cy.get('.learn-page')
			.get('.card')
			.get('.learn-btn-card')
			.eq(0)
			.click()
			.url()
			.should('include', '/learn/3')
	})

	it('Should be able to click the Home button to go back home', () => {
		cy.get('.home-link').click().get('.App').should('be.visible')
	})

	it('should be able to Like a bird card', () => {
		cy.get('.card').get('.bird-outline').eq(0).click()
		cy.get('.card').get('.bird-color').eq(0).should('be.visible')
		cy.get('.card').get('.outline').eq(0).should('be.visible')
	})
// who is she??? =======
  
  
// describe('Fowl Prowl main-page', () => {

//   beforeEach(() => {
//   // cy.visit('http://localhost:3000/')
//     cy.intercept('https://fowl-prowl-api.herokuapp.com/api/v1/allBirds',
//     { statusCode: 200,
//       body: [
//       {
// "id": 1,
// "family": "Paridae",
// "common_name": "Fire-capped tit",
// "scientific_name": "Cephalopyrus flammiceps",
// "description": "The fire-capped tit (Cephalopyrus flammiceps) is a small, 10 cm (3.9 in) long, weighing about 7 g (0.25 oz) bird species assigned to the family Paridae.",
// "habitat": "Forest, woodlands and regions with solitary trees",
// "fun_fact": "This tit is able to open rolled-up leaves with its beak as starlings do, and hold it with its foot.",
// "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fire-capped_Tit._AMSM0952.jpg/800px-Fire-capped_Tit._AMSM0952.jpg",
// "created_at": "2022-04-15T01:11:45.512Z",
// "updated_at": "2022-04-15T01:11:45.512Z"
// },
// {
// "id": 3,
// "family": "Paridae",
// "common_name": "Sultan tit",
// "scientific_name": "Melanochlora sultanea",
// "description": "The sultan tit (Melanochlora sultanea) is an Asian forest bird with a yellow crest, dark bill, black upperparts plumage and yellow underparts.",
// "habitat": "Lowland forests",
// "fun_fact": "The recumbent crest is raised when the bird is alert or alarmed.",
// "img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sultan_Tit_Mahananda_Wildlife_Sanctuary_Darjeeling%2C_West_Bengal%2C_India.jpg",
// "created_at": "2022-04-15T01:11:45.635Z",
// "updated_at": "2022-04-15T01:11:45.635Z"
// }],
// })
// .visit('http://localhost:3000/lifers')
//   })

//   it.only('Should be able to visit http://localhost:3000/lifers and render a navgivation bar with the title and nav buttons', () => {
//     cy.contains('Fowl Prowl')
//       .get('.home-link')
//       .contains('Home')
//       .get('.learn-link')
//       .contains('Learn')
//       .get('.lifers-link')
//       .contains('Your Lifers')
//       .get('.addBird-link')
//       .contains('Add Sighting')
//   });

//   it('Should be able to visit http://localhost:3000/lifers and see that there are no lifers saved', () => {
//       cy.get('.botd').should('be.visible')
//       .get('.learn-btn').should('be.visible')
//   });

//   it('Should be able to visit http://localhost:3000 and see  cards of all the birds', () => {
//     cy.get('.allBirds-container').should('be.visible')
//       .get('.card').should('have.length', 2)
//       .get('.card').eq(0).contains('Fire-capped tit')
//       .get('.icon').eq(0).should('be.visible')
//       .get('.learn-btn-card').contains('Learn more')
//   });

//   it('Should be directed to the main page when user clicks the Home button', () => {
//   cy.get('.home-link').click()
//     .url().should('include', '/')
// });

// it('Should be directed to the learn page when user clicks the Learn button', () => {
// cy.get('.learn-link').click()
//   .url().should('include', '/learn')
// });

//   it('Should be directed to the lifers page when user clicks the Lifers button', () => {
//   cy.get('.lifers-link').click()
//     .url().should('include', '/lifers')
// });

// it('Should be directed to the learn page when user clicks the Add sighting button', () => {
// cy.get('.addBird-link').click()
//   .url().should('include', '/add-sighting')
// })

// it.only(`Should be able to click 'learn more' on a bird card and see that birds\'s details`, () => {
//       cy.get('.learn-btn-card').eq(0).click()
//       .url().should('include', 'learn/1')
//       .get('img').should('be.visible')
//       .get('.home-link').click()
//       .get('.learn-btn-card').eq(1).click()
//       .url().should('include', 'learn/3')
//       .get('.home-link').click()
//       .get('.learn-btn').click()
//   });

// it('Should allow the user to use the back and forward buttons to go to a page in the viewer history', () => {
//     cy.get('.learn-link').click()
//     .get('.lifers-link').click()
//     .go('back')
//     .location('pathname').should('include', '/learn')
//     .go('forward')
//     .location('pathname').should('not.include', '/learn')
//   })

// })
