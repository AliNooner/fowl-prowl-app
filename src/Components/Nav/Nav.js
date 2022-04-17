import React from 'react'
import './Nav.css'
import { Route, NavLink } from 'react-router-dom'
import logo from '../../images/prowl.png'

const Nav = () => {
	return (
		<nav className='navigation'>
			<div className='title-div'>
				{/* <img id='logo' src={logo} alt='Fowl Prowl: A Modern Birding App' /> */}
				<h1 className='title'>Fowl Prowl</h1>
				<h4>A Modern Birding App</h4>
			</div>
			<div className='nav-buttons'>
				<NavLink to='/'>
					<p className='home-link'>Home</p>
				</NavLink>
				<NavLink to='/learn'>
					<p className='learn-link'>Learn</p>
				</NavLink>
				<NavLink to='/lifers'>
					<p className='lifers-link'>Your Lifers</p>
				</NavLink>
				<NavLink to='/add-sighting'>
					<p className='addBird-link'>Add Sighting</p>
				</NavLink>
			</div>
		</nav>
	)
}

export default Nav
