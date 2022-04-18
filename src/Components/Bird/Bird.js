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
				<div className='name-img-container'>
					<div className='single-name-container'>
						<h3 className='bird-name'>{this.state.singleBird.common_name}</h3>

						<p className='bird-sci-name'>
							{this.state.singleBird.scientific_name}
						</p>
					</div>
					<img
						className = "bird-image"
						src={this.state.singleBird.img_url}
						alt={this.state.singleBird.common_name}
						width='700vw'
						height='auto'
						position='fixed'
						id='birdImg'
					/>
				</div>
				<div className='description description-block'>
					<p className='intro'>Description: </p>
					<br></br>
					{this.state.singleBird.description}
				</div>
				{this.state.singleBird.habitat && (
					<div className='description habitat-block'>
					<p className='intro'>Habitat: </p>
						<br></br>
						{this.state.singleBird.habitat}
					</div>
				)}
				{this.state.singleBird.fun_fact && (
					<div className='description fact-block'>
						<p className='intro'>Fun Fact: </p>
						<br></br>
						{this.state.singleBird.fun_fact}
					</div>
				)}
			</div>
		)
	}
}

export default Bird
