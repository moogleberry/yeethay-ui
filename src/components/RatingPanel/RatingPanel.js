import './RatingPanel.css';
import React from 'react';
import RatingButton from '../RatingButton/RatingButton.js';
import _ from 'lodash';

class RatingPanel extends React.Component {

	createRatingButtons() {
		if(_.isArray(this.props.ratingOptions)) {
			return (
				<div className='rating-panel-buttons'>
					{
						this.props.ratingOptions.map((buttonValue) => {
							return (
								<RatingButton 
									key={buttonValue}
									buttonValue={buttonValue} 
									userRating={this.props.userRating} 
									hoverHandler={ this.props.hoverHandler } />
							);
						})
					}
				</div>
			);
		} else {
			return (<div>Loading</div>);
		}
	}

	createRatingDescription() {
		if(this.props.userRating) {
			return (
				<div className='rating-panel-description'>
					{ this.props.userRating.description }
				</div>
			);
		} else {
			return (
				<div>Loading</div>
			);
		}
	}

	render() {
		return (
			<div>
				{ this.createRatingButtons() }
				{ this.createRatingDescription() }
			</div>
		);
	}
} 

export default RatingPanel;