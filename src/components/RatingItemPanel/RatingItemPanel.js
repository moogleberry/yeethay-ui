import "./RatingItemPanel.css";
import React from "react";
import PropTypes from "prop-types";

function createItemPicture(ratingItem) {
	if (ratingItem) {
		return (
			<div className="item-image-container">
				<img src={ratingItem.pictureUrl} className="item-image" alt={ ratingItem.name } />
			</div>
		);
	}
	return (
		<div className="item-image-container">
			Loading
		</div>
	);
}

const RatingItemPanel = ({ratingItem}) => {
	return (
		<div>
			{ createItemPicture(ratingItem) }

			<div className="item-name">
				{ratingItem.name}
			</div>
		</div>
	);
}

RatingItemPanel.propTypes = {
	ratingItem: PropTypes.object
};

export default RatingItemPanel;
