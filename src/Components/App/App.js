import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import fetchCalls from '../../ApiCalls'
import AllBirds from '../AllBirds/AllBirds'
import Nav from '../Nav/Nav'
import Botd from '../Botd/Botd'
import Learn from '../Learn/Learn'
import Bird from '../Bird/Bird'
import Lifers from '../Lifers/Lifers'

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
			.then(data => {
			const newArray = data.map(bird => {
				bird.isFavorited = false
				bird.key = bird.id
				return bird
			})
			this.setState({allBirds: newArray})
			})
			.then(() => this.getRandomBird(this.state.allBirds))
	}

	getRandomBird = (array) => {
  const index = Math.floor(Math.random() * array.length)
	this.setState({botd:this.state.allBirds[index]})
	}

	changeIcon = (event) => {
		const updatedArray = this.state.allBirds.map(bird => {
			if (event.target.id == bird.id && !bird.isFavorited) {
				bird.isFavorited = true
				window.alert(`You added a new bird to your lifers collection! Click the ' Your lifers' button to view.`)
			} else if (event.target.id == bird.id && bird.isFavorited){
				bird.isFavorited = false
				window.alert(`You removed a bird from your lifers collection!`)

			}
			return bird
		})
		this.setState({allBirds: updatedArray})
	}

	render() {
		return (
			<main className='App'>
				<Nav />
				<Route
				 	exact path='/'
					render={() => <Botd randomBird={this.state.botd}/>}
				/>
				<Switch>
					<Route
						 exact path='/'
						render={() =>
							<div>
							<p className='check-out-tag'>Check these birds out! Click the bird icon to add a bird to your lifers collection.</p>
							<AllBirds allBirds={this.state.allBirds} changeIcon={this.changeIcon}/>
							</div>}
					/>
					<Route
						 exact path='/lifers'
						render={() => <Lifers lifers={this.state.lifers} allBirds={this.state.allBirds} changeIcon = {this.changeIcon}/>}
					/>
					<Route
						exact path='/learn'
						render={() => <Learn allBirds={this.state.allBirds} changeIcon = {this.changeIcon} />}
					/>
				</Switch>
				<Route
					path='/learn/:id'
					render={({match}) => <Bird id={match.params.id}/>}
				/>
				<Route
					path='/add-sighting'
					render={() => <div> Submission form coming soon! </div>}
				/>
			</main>
		)
	}
}

export default App
