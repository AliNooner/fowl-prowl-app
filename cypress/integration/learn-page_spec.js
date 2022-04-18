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
		cy.get('.card').get('.outline').eq(0).click()
		cy.get('.card').get('.color').eq(0).should('be.visible')
		cy.get('.card').get('.outline').eq(0).should('be.visible')
	})
})
