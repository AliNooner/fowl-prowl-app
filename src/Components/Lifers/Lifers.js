import React from 'react';
import Card from '../Card/Card';
import './Lifers.css';

const Lifers = ({allBirds, changeIcon}) => {
  const birdCards = allBirds.map((bird) => {
    if (bird.isFavorited){
      return (
        <Card
        birdObject = {bird}
        commonName={bird.common_name}
        scientificName={bird.scientific_name}
        img={bird.img_url}
        id={bird.id}
        key={bird.id}
        changeIcon={changeIcon}
        />
      )
    }
  })

  return (
  <div className='allBirds-container'>{birdCards}</div>
  )
}




export default Lifers;
