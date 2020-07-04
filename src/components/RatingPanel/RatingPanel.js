import './RatingPanel.css';
import React from 'react';
import RatingButton from '../RatingButton/RatingButton.js';
import _ from 'lodash';

class RatingPanel extends React.Component {

	createRatingButtons() {
		if(_.isArray(this.props.ratingOptions)) {
			return (
				this.props.ratingOptions.map((buttonValue) => {
					return (
						<RatingButton 
							key={buttonValue}
							buttonValue={buttonValue} 
							userRating={this.props.userRating} 
							hoverHandler={ this.props.hoverHandler } />
					);
				})
			);
		} else {
			return (<div>Loading</div>);
		}
	}

	render() {
		return (
			<div>
				<div className='rating-panel-buttons'>
					{ this.createRatingButtons() }
				</div>

				<div className='rating-panel-description'>
					{ this.props.userRating.description }
				</div>
			</div>
		);
	}
} 

export default RatingPanel;