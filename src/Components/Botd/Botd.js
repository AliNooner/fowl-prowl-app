import React, { Component} from 'react';
import './Botd.css';
import { Route, NavLink } from 'react-router-dom'


const Botd = () => {
  return(
    <div className= 'botd'  style={{
      backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fire-capped_Tit._AMSM0952.jpg/800px-Fire-capped_Tit._AMSM0952.jpg")`
    }}>
    <div className= 'name-div'>
      <p className= 'common-name-botd'>Common name Here</p>
      <p className= 'scientific-name-botd'>Scientific Name</p>
    </div>
    <NavLink to='/learn/:id'>
      <button className="learn-btn">Learn More</button>
    </NavLink>
    </div>
  )
}

export default Botd;
