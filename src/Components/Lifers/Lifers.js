import React from 'react'
import Card from '../Card/Card'
import './Lifers.css'

const Lifers = ({ allBirds, changeIcon, hasLifers }) => {

	const birdCards = allBirds.map((bird) => {
		if (bird.isFavorited) {
			return (
				<Card
					birdObject={bird}
					commonName={bird.common_name}
					scientificName={bird.scientific_name}
					img={bird.img_url}
					id={bird.id}
					key={bird.id}
					changeIcon={changeIcon}
				/>
			)
		}
	})
	const newCards = birdCards.filter((bird) => bird != undefined)

	return (
		<div>
			{!newCards.length && (
				<p className='no-lifers'>You have no lifers yet, try adding some!</p>
			)}
			<div className='allBirds-container'>{newCards}</div>
		</div>
	)
}

export default Lifers
