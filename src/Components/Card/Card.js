import React, { Component } from 'react'
import './Card.css'
import { Route, NavLink } from 'react-router-dom'
import colorBird from '../../images/bird_color.png'
import birdOutline from '../../images/bird_outline.png'

const Card = ({
	commonName,
	scientificName,
	img,
	id,
	changeIcon,
	birdObject,
}) => {
	return (
		<div className='card'>
			<div className='name-container'>
				<p className=' style common-name'>{commonName}</p>
				<p className='style sci-name'>{scientificName}</p>
			</div>
			<img src={img} alt={commonName} id='birdCardImg' />
			<div className='bottom'>
				{!birdObject.isFavorited && (
					<img
						className='icon'
						src={birdOutline}
						id={birdObject.id}
						onClick={(event) => changeIcon(event)}
					/>
				)}
				{birdObject.isFavorited && (
					<img
						src={colorBird}
						className='icon'
						id={birdObject.id}
						onClick={(event) => changeIcon(event)}
					/>
				)}
				<NavLink to={`/learn/${id}`}>
					<p className='learn-btn-card'>Learn more</p>
				</NavLink>
			</div>
		</div>
	)
}

export default Card
