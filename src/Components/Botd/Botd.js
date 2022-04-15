import React, { Component} from 'react';
import './Botd.css';
import { Route, NavLink } from 'react-router-dom'


const Botd = ({randomBird}) => {

// const birdOfDay = this.props.randomBird(this.props.allBirds)

  return(
    <div className= 'botd'  style={{
      backgroundImage: `url(${randomBird.img_url})`
    }}>
    <div className= 'name-div'>
      <p className= 'common-name-botd'>{randomBird.common_name}</p>
      <p className= 'scientific-name-botd'>{randomBird.scientific_name}</p>
    </div>
    <NavLink to='/learn/:id'>
      <button className="learn-btn">Learn More</button>
    </NavLink>
    </div>
  )
}

export default Botd;
