import React, { Component } from 'react'
import fetchCalls from '../../ApiCalls'
import './Bird.css'

class Bird extends Component {
	constructor(props) {
		super(props)
		this.state = {
			birdID: props.id,
			singleBird: 'test bird',
		}
	}

	componentDidMount = () => {
		fetchCalls.fetchData(`allBirds/${this.state.birdID}`).then((data) => {
			this.setState({ singleBird: data[0] })
		})
	}

	render() {
		return (
			<div className='single-bird-container'>
				{/* <p>{this.state.birdID}</p> */}
				<div className='name-img-container'>
					<div className='single-name-container'>
						<h3 className='bird-name'>{this.state.singleBird.common_name}</h3>
						<p className='bird-sci-name'>
							{this.state.singleBird.scientific_name}
						</p>
					</div>
					<img
						src={this.state.singleBird.img_url}
						alt={this.state.singleBird.common_name}
						width='700vw'
						height='auto'
						position='fixed'
						id='birdImg'
					/>
				</div>
				<p className='description'>
					<p className='intro'>Description: </p>
					<br></br>
					{this.state.singleBird.description}
				</p>
				{this.state.singleBird.habitat && (
					<p className='description'>
						<p className='intro'>Habitat: </p>
						<br></br>
						{this.state.singleBird.habitat}
					</p>
				)}
				{this.state.singleBird.fun_fact && (
					<p className='description'>
						<p className='intro'>Fun Fact: </p>
						<br></br>
						{this.state.singleBird.fun_fact}
					</p>
				)}
			</div>
		)
	}
}

export default Bird
