import "./RatingButton.css";
import React from "react";
import PropTypes from "prop-types";
import RatingIcon from "../RatingIcon/RatingIcon.js";

const RatingButton = ({buttonValue, buttonDescription, hoverHandler, userRating, clickHandler}) => {
	return (
		<button
			type="submit"
			className="rating-button"
			value={buttonValue}
			aria-label={buttonDescription}
			onMouseEnter={() => hoverHandler(buttonValue)}
			onMouseLeave={() => hoverHandler(null)}
			onClick={() => clickHandler(buttonValue)}
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
