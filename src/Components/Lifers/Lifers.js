import React from 'react';
import Card from '../Card/Card';
import './Lifers.css';

const Lifers = ({allBirds, changeIcon, hasLifers}) => {
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
  const newCards = birdCards.filter(bird => bird != undefined)
  console.log('TESTTTT', newCards)

  return (
    <div>
      {!newCards.length && <p>You have no lifers.</p>}
      <div className='allBirds-container'>{newCards}</div>
    </div>
  )
}

export default Lifers;
