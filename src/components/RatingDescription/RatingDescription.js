import "./RatingDescription.css";
import React from "react";
import PropTypes from "prop-types";

const RatingDescription = ({userRating}) => {
	return (
			<div className="rating-panel-description">
				{ userRating.description }
			</div>
		);
};

RatingDescription.propTypes = {
	userRating: PropTypes.object
};

export default RatingDescription;
