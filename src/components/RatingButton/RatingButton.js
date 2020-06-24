import './RatingButton.css';
import React from 'react';
import RatingIcon from '../RatingIcon/RatingIcon.js'

class RatingButton extends React.Component {
	render() {
		const ratingDescriptions = {
			"-3": "A Lot Cooling",
			"-2": "Cooling", 
			"-1": "A Bit Cooling",
			"0": "Neutral",
			"1": "A Bit Warming",
			"2": "Warming",
			"3": "A Lot Warming"
		};

		function getRatingHover(value) {
			console.log(ratingDescriptions[value]);
		}

		return (
			<button className="rating-button" onMouseEnter={() => getRatingHover(this.props.value)}>
				<RatingIcon value={this.props.value} />
			</button>
		);
	}
}

export default RatingButton;