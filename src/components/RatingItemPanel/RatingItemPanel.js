import "./RatingItemPanel.css";
import React from "react";
import PropTypes from "prop-types";

class RatingItemPanel extends React.Component {
	static get propTypes() {
		return {
			ratingItem: PropTypes.object
		};
	}

	createItemPicture() {
		if (this.props.ratingItem) {
			return (
				<div className="item-image-container">
					<img src={this.props.ratingItem.pictureUrl} className="item-image" alt={ this.props.ratingItem.name } />
				</div>
			);
		}
		return (
			<div className="item-image-container">
        Loading
			</div>
		);
	}

	render() {
		return (
			<div>
				{ this.createItemPicture() }

				<div className="item-name">
					{this.props.ratingItem.name}
				</div>
			</div>
		);
	}
}

export default RatingItemPanel;
