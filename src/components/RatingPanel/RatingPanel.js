import './RatingPanel.css';
import React from 'react';
import RatingButton from '../RatingButton/RatingButton.js'

class RatingPanel extends React.Component {
	render() {
		return (
			<div>
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

				<div className='rating-panel-description'>
					{this.props.userRating.description}
				</div>
			</div>
		);
	}
} 

export default RatingPanel;