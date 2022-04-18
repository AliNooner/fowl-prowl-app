import React from 'react';
import Card from '../Card/Card';
import './AllBirds.css';
import PropTypes from 'prop-types';

const AllBirds = ({allBirds, changeIcon}) => {
  const birdCards = allBirds.map((bird) => {
    return (
      <Card
        birdObject = {bird}
        key={bird.id}
        changeIcon={changeIcon}
      />
    )
  })

  return (
      <div className='allBirds-container'>{birdCards}</div>
  )
}

AllBirds.propTypes = {
  changeIcon: PropTypes.func,
  allBirds: PropTypes.array
}


export default AllBirds
