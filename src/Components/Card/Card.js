import React, { Component } from 'react'
import './Card.css'
import { Route, NavLink } from 'react-router-dom'
import colorBird from '../../images/bird_color.png'
import birdOutline from '../../images/bird_outline.png'

const Card = ({
	changeIcon,
	birdObject,
}) => {
	return (
		<div className='card'>
			<div className='name-container'>
				<p className=' style common-name'>{birdObject.common_name}</p>
				<p className='style sci-name'>{birdObject.scientific_name}</p>
			</div>
			<img src={birdObject.img_url} alt={birdObject.common_name} className='bird-image' id='birdCardImg' />
			<div className='bottom'>
				{!birdObject.isFavorited && (
					<img
						className='icon outline-bird'
						src={birdOutline}
						id={birdObject.id}
						onClick={(event) => changeIcon(event)}
					/>
				)}
				{birdObject.isFavorited && (
					<img
						src={colorBird}
						className='icon color-bird'
						id={birdObject.id}
						onClick={(event) => changeIcon(event)}
					/>
				)}
				<NavLink to={`/learn/${birdObject.id}`}>
					<p className='learn-btn-card'>Learn more</p>
				</NavLink>
			</div>
		</div>
	)
}

export default Card
