import React from 'react';
import './Card.css';

const Card = ({commonName, scientificName, img, id}) => {
  return (
    <div className='card'>
      <p>{commonName}</p>
      <p>{scientificName}</p>
      <img src={img} alt={commonName} height='200px'/>
    </div>
  )
}





export default Card;
