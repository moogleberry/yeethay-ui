import "./RatingButton.css";
import React from "react";
import PropTypes from "prop-types";
import RatingIcon from "../RatingIcon/RatingIcon.js";

function ratingButtonClick(buttonValue) {
	console.log(buttonValue);
}

const RatingButton = ({buttonValue, buttonDescription, hoverHandler, userRating}) => {
	return (
		<button
			type="submit"
			className="rating-button"
			value={buttonValue}
			aria-label={buttonDescription}
			onMouseEnter={() => hoverHandler(buttonValue)}
			onMouseLeave={() => hoverHandler(null)}
			onClick={() => ratingButtonClick(buttonValue)}
		>

			<RatingIcon
				buttonValue={buttonValue}
				userRating={userRating}
			/>
		</button>
	);
}

RatingButton.propTypes = {
	buttonValue: PropTypes.number,
	buttonDescription: PropTypes.string,
	hoverHandler: PropTypes.func,
	userRating: PropTypes.object
};

export default RatingButton;
