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
	constructor(props) {
		super(props)
		this.state = {
			isFavorited: false
		}
	}

	changeIcon = (id) => {
		if (!this.state.isFavorited){
			this.setState({isFavorited: true})
			this.props.addLifer(this.props.birdObject)
		} else if (this.state.isFavorited){
			this.setState({isFavorited: false})
			this.props.removeLifer(this.props.birdObject.id)
		}
	}
	render() {
		return (
			<div className='card'>
						<div className='name-container'>
							<p className=' style common-name'>{this.props.commonName}</p>
							<p className='style sci-name'>{this.props.scientificName}</p>
						</div>
						<img src={this.props.img} alt={this.props.commonName} height='200px'/>
						<div className='bottom'>
						{!this.state.isFavorited && <img src={birdOutline} id='icon' onClick={() => this.changeIcon(this.props.id)}/> }
						{this.state.isFavorited && <img src={colorBird} id='icon' onClick={() => this.changeIcon(this.props.id)}/> }
						<NavLink to={`/learn/${this.props.id}`}>
							<p className='learn-btn-card'>Learn more</p>
						</NavLink>
						</div>
					</div>
		)
	}
}
export default Card
