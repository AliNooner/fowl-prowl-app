import React from 'react';
import './Nav.css';
import { Route, NavLink } from 'react-router-dom';

const Nav= () => {
  return (
    <nav className='navigation'>
      <h1 className='title'>Fowl Prowl</h1>
      <div className='nav-buttons'>
      <NavLink to='/'>
      <p className='home-link'>Home</p>
      </NavLink>
      <NavLink to='/learn'>
      <p className='learn-link'>Learn</p>
      </NavLink>
      <NavLink to='/addBird'>
      <p className='addBird-link'>Add Sighting</p>
      </NavLink>
      </div>
    </nav>
  )
}


export default Nav;
