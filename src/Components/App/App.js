import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import fetchCalls from '../../ApiCalls'
import AllBirds from '../AllBirds/AllBirds'
import Nav from '../Nav/Nav'
import Botd from '../Botd/Botd'

class App extends Component {
	constructor() {
		super()
		this.state = {
			allBirds: [],
		}
	}

	componentDidMount = () => {
		fetchCalls
			.fetchData('allBirds')
			.then((data) => this.setState({ allBirds: data }))
	}

	render() {
		return (
			<main className='App'>
				<Nav />
				<Route
				 exact path='/'
					render={() => <Botd />}
				/>
				<Route
					 exact path='/'
					render={() => <AllBirds allBirds={this.state.allBirds} />}
				/>
				<Route
					exact path='/learn'
					render={() => <AllBirds allBirds={this.state.allBirds} />}
				/>
				<Route
					path='/learn/:id'
					render={() => <div>Learn about single bird </div>}
				/>
				<Route
					path='/add-sighting'
					render={() => <div>Add bird sighting </div>}
				/>
			</main>
		)
	}
}

export default App
