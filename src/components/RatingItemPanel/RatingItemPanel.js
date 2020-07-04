import './RatingItemPanel.css';
import React from 'react';

class RatingItemPanel extends React.Component {
	createItemPicture() {
		if(this.props.ratingItem) {
			return (
				<div>
					<img src={this.props.ratingItem.pictureUrl} className='item-image' alt={'Picture of ' + this.props.ratingItem.name} />
				</div>
			);
		} else {
			return (
				<div>Loading</div>
			);
		}
	}

	createItemName() {
		if(this.props.ratingItem) {
			return (
				<div className='item-name'>
					{this.props.ratingItem.name}
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
				{ this.createItemPicture() }
				{ this.createItemName() }
			</div>
		);
	}
}

export default RatingItemPanel;