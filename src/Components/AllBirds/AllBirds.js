import React from 'react';
import Card from '../Card/Card';
import './AllBirds.css';

const AllBirds = ({allBirds, addLifer}) => {
  const birdCards = allBirds.map((bird) => {
    return (
      <Card
        commonName={bird.common_name}
        scientificName={bird.scientific_name}
        img={bird.img_url}
        id={bird.id}
        key={bird.id}
        addLifer={addLifer}
      />
    )
  })

  return <div className='allBirds-container'>{birdCards}</div>
}




export default AllBirds;
