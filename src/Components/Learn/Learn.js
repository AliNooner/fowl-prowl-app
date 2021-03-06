import React from 'react'
import './Learn.css'
import AllBirds from '../AllBirds/AllBirds'

const Learn = ({ allBirds, changeIcon }) => {

	const titFamily = allBirds.filter((bird) => bird.family === 'Paridae')
	const bopFamily = allBirds.filter((bird) => bird.family === 'Bop')
	const falconFamily = allBirds.filter((bird) => bird.family === 'Falconidae')

	return (
		<section className='learn-page'>
			<p className='select-bird-p'>
				Welcome to the Fowl Prowl encyclopedia! Click the 'learn more' button
				for additional information.
			</p>
			<div>
				<p className='family-title'> The Paridae Family:</p>
				<AllBirds allBirds={titFamily} changeIcon={changeIcon} />
				<p className='family-title'> The Paradisaeidae Family:</p>
				<AllBirds allBirds={bopFamily} changeIcon={changeIcon} />
				<p className='family-title'> The Falconidae Family:</p>
				<AllBirds allBirds={falconFamily} changeIcon={changeIcon} />
			</div>
		</section>
	)
}

export default Learn
