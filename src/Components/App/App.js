import React, { Component } from 'react';
import { Router, NavLink } from 'react-router-dom';
import './App.css';
import fetchCalls from '../../ApiCalls';
import AllBirds from '../AllBirds/AllBirds';
import Nav from '../Nav/Nav';

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
        <Nav />
        <h1>Welcome to Fowl Prowl</h1>
        <AllBirds allBirds={this.state.allBirds}/>
      </main>
    )
  }
}


export default App;
