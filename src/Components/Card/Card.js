import React, { Component } from 'react'
import './Card.css'
import { Route, NavLink } from 'react-router-dom'
import colorBird from '../../images/bird_color.png'
import birdOutline from '../../images/bird_outline.png'


// const Card = ({ commonName, scientificName, img, id, addLifer }) => {
// 	return (
// 		<div className='card'>
// 			<div className='name-container'>
// 				<p className=' style common-name'>{commonName}</p>
// 				<p className='style sci-name'>{scientificName}</p>
// 			</div>
// 			<img src={img} alt={commonName} height='200px' />
// 			<div className='bottom'>
// 			<img src={birdOutline} id='icon'/>
// 			<NavLink to={`/learn/${id}`}>
// 				<p className='learn-btn-card'>Learn more</p>
// 			</NavLink>
// 			</div>
// 		</div>
// 	)
// }

class Card extends Component {
	constructor(props) { //this.props.birdObject
		super(props)
		this.state = {
			isFavorited: false
		}
	}

	// changeIcon = (id) => {
	// 	if (!this.state.isFavorited){
	// 		this.setState({isFavorited: true})
	// 		this.props.addLifer(this.props.birdObject)
	// 	} else if (this.state.isFavorited){
	// 		this.setState({isFavorited: false})
	// 		this.props.removeLifer(this.props.birdObject.id)
	// 	}
	// }

	// changeIcon = (id) => {
	// 	if (!this.state.isFavorited){
	// 		 this.props.birdObject.isFavorite = true
	// 		this.props.addLifer(this.props.birdObject)
	// 	} else if (this.state.isFavorited){
	// 		this.props.birdObject.isFavorite = false
	// 		this.props.removeLifer(this.props.birdObject.id)
	// 	}
	// }




	render() {
		return (
			<div className='card'>
						<div className='name-container'>
							<p className=' style common-name'>{this.props.commonName}</p>
							<p className='style sci-name'>{this.props.scientificName}</p>
						</div>
						<img src={this.props.img} alt={this.props.commonName} height='200px'/>
						<div className='bottom'>
						{!this.props.birdObject.isFavorited && <img className= 'icon' src={birdOutline} id={this.props.birdObject.id} onClick={(event) => this.props.changeIcon(event)}/> }
						{this.props.birdObject.isFavorited && <img src={colorBird} className = 'icon' id={this.props.birdObject.id} onClick={(event) => this.props.changeIcon(event)}/> }
						<NavLink to={`/learn/${this.props.id}`}>
							<p className='learn-btn-card'>Learn more</p>
						</NavLink>
						</div>
					</div>
		)
	}
}
export default Card
