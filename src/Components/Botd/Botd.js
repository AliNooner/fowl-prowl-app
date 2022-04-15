import React, { Component} from 'react';
import './Botd.css';


const Botd = () => {
  return(
    <div className= 'botd'  style={{
      backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fire-capped_Tit._AMSM0952.jpg/800px-Fire-capped_Tit._AMSM0952.jpg")`
    }}>
    <div className= 'name-div'>
      <p>Common name Here</p>
      <p>Scientific Name</p>
    </div>
    <button className="learn-btn">Learn More</button>
    </div>
  )
}

export default Botd;
