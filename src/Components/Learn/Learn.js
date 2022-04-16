import React from 'react'
import './Learn.css'
import AllBirds from '../AllBirds/AllBirds'

const Learn = ({ allBirds }) => {
	return (
		<section className='learnPage'>
			<p className='select-bird-p'>Select a bird to learn more</p>
			<label for='select-family'>Filter by family:</label>
			<select className='select-family' name='select-family'>
				<option value='select'>select</option>
				<option value='Bop'>Birds of Paradise</option>
				<option value='Paridae'>Tit Family</option>
				<option value='Falconidae'>Falcon Family</option>
			</select>

			<AllBirds allBirds={allBirds} />
		</section>
	)
}

export default Learn
