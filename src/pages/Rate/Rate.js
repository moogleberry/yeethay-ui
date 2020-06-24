import './Rate.css';
import React from 'react';
import ItemPanel from '../../components/ItemPanel/ItemPanel.js';
import RatingPanel from '../../components/RatingPanel/RatingPanel.js';

class Rate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			item: {
				name: null,
				pictureUrl: null
			},
			rating: {
				value: null,
				description: null
			}
		};

		this.state.item = {
			name: "Ginger",
			pictureUrl: "https://files.nccih.nih.gov/files/ginger-ThinkstockPhotos-531052216-square.jpg"
		};

		this.ratingDescriptions = {
			"-3": "A Lot Cooling",
			"-2": "Cooling", 
			"-1": "A Bit Cooling",
			"0": "Neutral",
			"1": "A Bit Warming",
			"2": "Warming",
			"3": "A Lot Warming"
		};

		this.ratingOptions = [
			-3, -2, -1, 0, 1, 2, 3
		];

	}

	getRatingDescription(value) {
		return this.ratingDescriptions[value];
	}

	updateRatingDescription(value) {
		let newRating = Object.assign({}, this.state.rating);
		if(value !== null) {
			newRating.value = value;
			newRating.description = this.getRatingDescription(value);
			this.setState({rating: newRating});
		} else {
			newRating.value = null;
			newRating.description = null;
			this.setState({rating: newRating});
		}
	}

	render() {
		return (
			<div>
				<h2 className='page-title'>
					Is It Yeet Hay?
				</h2>
				<div className='rate-item-panel'>
					<ItemPanel 
						item={this.state.item} />
				</div>
				<div>
					<RatingPanel 
						ratingOptions={this.ratingOptions}
						rating={this.state.rating} 
						hoverHandler={ this.updateRatingDescription.bind(this) } />
				</div>
			</div>
		);
	}
}

export default Rate;