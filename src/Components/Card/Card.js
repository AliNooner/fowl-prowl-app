import React from 'react'
import './Card.css'
import { Route, NavLink } from 'react-router-dom'
import colorBird from '../../images/bird_color.png'
import birdOutline from '../../images/bird_outline.png'


const Card = ({ commonName, scientificName, img, id, addLifer }) => {
	return (
		<div className='card'>
			<div className='name-container'>
				<p className=' style common-name'>{commonName}</p>
				<p className='style sci-name'>{scientificName}</p>
			</div>
			<img src={img} alt={commonName} height='200px' />
			<div className='bottom'>
			<img src={birdOutline} id='icon'/>
			<NavLink to={`/learn/${id}`}>
				<p className='learn-btn-card'>Learn more</p>
			</NavLink>
			</div>
		</div>
	)
}

export default Card
