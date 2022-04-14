import React, { Component } from 'react';
import './App.css';
import fetchCalls from '../../ApiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBirds: []
    }
  }

componentDidMount = () => {
  fetchCalls.fetchData('allBirds')
    .then((data) => this.setState({allBirds: data}))
}

  render() {
    return (
      <main className='App'>
        <h1>Welcome to Fowl Prowl</h1>
      </main>
    )
  }
}


export default App;
