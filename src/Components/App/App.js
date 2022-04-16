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

	addLifer = (newBird) => {
		this.setState({lifers: [...this.state.lifers, newBird]})
		console.log('AFTER ADDING', this.state.lifers)
	}

	removeLifer = (id) => {
		const filteredBirds = this.state.lifers.filter(bird => bird.id != id)
		this.setState({lifers: filteredBirds})
		console.log('AFTER REMOVE', this.state.lifers)
	}

	// changeIcon = (id) => {
	// 	if (!this.state.isFavorited){
	// 		 this.props.birdObject.isFavorite = true
	// 		this.props.addLifer(this.props.birdObject)
	// 	} else if (this.state.isFavorited){
	// 		this.props.birdObject.isFavorite = false
	// 		this.props.removeLifer(this.props.birdObject.id)
	// 	}
	// }

	changeIcon = (event) => {
		const updatedArray = this.state.allBirds.map(bird => {
			if (event.target.id == bird.id){
				console.log('BIRD ID', bird.id)
			}
			if (event.target.id == bird.id && !bird.isFavorited) {
				bird.isFavorited = true
			} else if (event.target.id == bird.id && bird.isFavorited){
				bird.isFavorited = false
			}
			return bird
		})
		console.log('Result', updatedArray[0].isFavorited)
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
						render={() => <AllBirds allBirds={this.state.allBirds} addLifer={this.addLifer} removeLifer={this.removeLifer}
						changeIcon={this.changeIcon}/>}
					/>
					<Route
						 exact path='/lifers'
						render={() => <Lifers lifers={this.state.lifers}/>}
					/>
					<Route
						exact path='/learn'
						render={() => <Learn allBirds={this.state.allBirds} addLifer={this.addLifer} removeLifer={this.removeLifer} changeIcon = {this.changeIcon} />}
					/>
				</Switch>
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
