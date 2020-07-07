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
						_.map(this.props.ratingOptions, (ratingOption) => {
							return (
								<RatingButton 
									key={ratingOption.value}
									buttonValue={ratingOption.value} 
									buttonDescription={ratingOption.description}
									userRating={this.props.userRating} 
									hoverHandler={ this.props.hoverHandler } />
							);
						})
					}
				</div>
			);
		} else {
			return (
				<div>
					Loading
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{ this.createRatingButtons() }

				<div className='rating-panel-description'>
					{ this.props.userRating.description }
				</div>
			</div>
		);
	}
} 

export default RatingPanel;