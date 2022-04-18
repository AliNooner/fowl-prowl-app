import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import fetchCalls from '../../ApiCalls'
import AllBirds from '../AllBirds/AllBirds'
import Nav from '../Nav/Nav'
import Botd from '../Botd/Botd'
import Learn from '../Learn/Learn'
import Bird from '../Bird/Bird'
import Lifers from '../Lifers/Lifers'
import logo from '../../images/prowl.png'

class App extends Component {
	constructor() {
		super()
		this.state = {
			allBirds: [],
			botd: {},
			hasLifers: false,
			counter: 0,
		}
	}

	componentDidMount = () => {
		fetchCalls
			.fetchData('allBirds')
			.then((data) => {
				const newArray = data.map((bird) => {
					bird.isFavorited = false
					bird.key = bird.id
					return bird
				})
				this.setState({ allBirds: newArray })
			})
			.then(() => this.getRandomBird(this.state.allBirds))
	}

	getRandomBird = (array) => {
		const index = Math.floor(Math.random() * array.length)
		this.setState({ botd: this.state.allBirds[index] })
	}

	changeIcon = (event) => {
		const updatedArray = this.state.allBirds.map((bird) => {
			if (parseInt(event.target.id) === bird.id && !bird.isFavorited) {
				bird.isFavorited = true
				this.setState({hasLifers: true, counter: this.state.counter + 1})
			} else if (parseInt(event.target.id) === bird.id && bird.isFavorited) {
				bird.isFavorited = false
				this.setState({counter: this.state.counter - 1})
			}
			if (this.state.counter === 0) {
				this.setState({hasLifers: false})
			}
			return bird
		})
		this.setState({ allBirds: updatedArray})
	}

	render() {
		return (
			<main className='App'>
				<Nav />
				<Route
					exact
					path='/'
					render={() => <Botd randomBird={this.state.botd} />}
				/>
				<Switch>
					<Route
						exact
						path='/'
						render={() => (
							<div>
								<p className='check-out-tag'>
									Check these birds out! Click the bird icon to add a bird to
									your lifers collection.
								</p>
								<AllBirds
									allBirds={this.state.allBirds}
									changeIcon={this.changeIcon}
								/>
							</div>
						)}
					/>
					<Route
						exact
						path='/lifers'
						render={() => (
							<Lifers
								lifers={this.state.lifers}
								allBirds={this.state.allBirds}
								changeIcon={this.changeIcon}
							/>
						)}
					/>
					<Route
						exact
						path='/learn'
						render={() => (
							<Learn
								allBirds={this.state.allBirds}
								changeIcon={this.changeIcon}
							/>
						)}
					/>
				<Route
					path='/learn/:id'
					render={({ match }) => <Bird id={match.params.id} />}
				/>
				<Route
					exact path='/add-sighting'
					render={() => <div className= 'coming-soon'> Submission form coming soon! </div>}
				/>
				<Route
				render={() => (
					<div className='no-match'>404 Error: Sorry, the URL/page you requested was not found.</div>)}
					/>
					</Switch>
				<footer>
					<img src={logo} alt='Fowl Prowl Logo' id='logo' />
				</footer>
			</main>
		)
	}
}

export default App
