import React, { Component } from 'react';
import fetchCalls from '../../ApiCalls';
import './Bird.css'

class Bird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdID: props.id,
      singleBird: 'test bird',
    }
  }

componentDidMount = () => {
  fetchCalls.fetchData(`allBirds/${this.state.birdID}`)
    .then(data => {
      this.setState({singleBird: data[0]})
    })
  }

  render() {
    return(
      <div>
        <p>{this.state.birdID}</p>
        <p>{this.state.singleBird.common_name}</p>
        <img src={this.state.singleBird.img_url} alt="Bird photo" width="500px" height="auto" position="fixed"/>
        <p>{this.state.singleBird.description}</p>
      </div>
    )
  }
}

export default Bird;
