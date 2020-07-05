import './RatingItemPanel.css';
import React from 'react';

class RatingItemPanel extends React.Component {
	createItemPicture() {
		if(this.props.ratingItem) {
			return (
				<div className='item-image-container'>
					<img src={this.props.ratingItem.pictureUrl} className='item-image' alt={'Picture of ' + this.props.ratingItem.name} />
				</div>
			);
		} else {
			return (
				<div className='item-image-container'>
					Loading
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{ this.createItemPicture() }

				<div className='item-name'>
					{this.props.ratingItem.name}
				</div>
			</div>
		);
	}
}

export default RatingItemPanel;