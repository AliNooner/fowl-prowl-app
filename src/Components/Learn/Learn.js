import React from 'react'
import './Learn.css'
import AllBirds from '../AllBirds/AllBirds'

const Learn = ({ allBirds, changeIcon }) => {
 const titFamily = allBirds.filter(bird => bird.family === 'Paridae')
 const bopFamily = allBirds.filter(bird => bird.family === 'Bop')
	const falconFamily = allBirds.filter(bird => bird.family ==='Falconidae')

	return (
		<section className='learnPage'>
			<p className='select-bird-p'>Welcome to the Fowl Prowl encyclopedia! Click the 'learn more' button for additional information.</p>
			<label for='select-family'>Filter by family:</label>
			<select className='select-family' name='select-family'>
				<option value='select'>select</option>
				<option value='Bop'>Birds of Paradise</option>
				<option value='Paridae'>Tit Family</option>
				<option value='Falconidae'>Falcon Family</option>
			</select>
			<div>
				<p className = "familyTitle"> The Paridae Family</p>
				<AllBirds allBirds={titFamily} changeIcon ={changeIcon} />
				<p className = "familyTitle"> The Paradisaeidae Family</p>
				<AllBirds allBirds={bopFamily} changeIcon ={changeIcon} />
				<p className = "familyTitle"> Falconidae Family</p>
				<AllBirds allBirds={falconFamily} changeIcon ={changeIcon} />
			</div>
		</section>
	)
}

export default Learn
