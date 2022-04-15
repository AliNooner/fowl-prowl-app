import React from 'react'
import './Card.css'

const Card = ({ commonName, scientificName, img, id }) => {
	return (
		<div className='card'>
			<div className='name-container'>
				<p className=' style common-name'>{commonName}</p>
				<p className='style sci-name'>{scientificName}</p>
			</div>
			<img src={img} alt={commonName} height='200px' />
		</div>
	)
}

export default Card
