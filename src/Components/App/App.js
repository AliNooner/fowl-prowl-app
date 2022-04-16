import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import fetchCalls from '../../ApiCalls'
import AllBirds from '../AllBirds/AllBirds'
import Nav from '../Nav/Nav'
import Botd from '../Botd/Botd'
import Learn from '../Learn/Learn'
import Bird from '../Bird/Bird'

class App extends Component {
	constructor() {
		super()
		this.state = {
			allBirds: [],
			botd: {},
			lifers: []
		}
	}

	componentDidMount = () => {
		fetchCalls
			.fetchData('allBirds')
			.then((data) => this.setState({ allBirds: data }))
			.then(() => this.getRandomBird(this.state.allBirds))
	}

	getRandomBird = (array) => {
  const index = Math.floor(Math.random() * array.length)
	this.setState({botd:this.state.allBirds[index]})
	}

	addLifer = (newBird) => {
		this.setState({lifers: [...this.state.lifers, newBird]})
	}


	render() {
		return (
			<main className='App'>
				<Nav />
				<Route
				 exact path='/'
					render={() => <Botd randomBird={this.state.botd}/>}
				/>
				<Route
					 exact path='/'
					render={() => <AllBirds allBirds={this.state.allBirds} addLifer={this.addLifer}/>}
				/>
				<Route
					exact path='/learn'
					render={() => <Learn allBirds={this.state.allBirds} />}
				/>
				<Route
					path='/learn/:id'
					render={({match}) => <Bird id={match.params.id}/>}
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
