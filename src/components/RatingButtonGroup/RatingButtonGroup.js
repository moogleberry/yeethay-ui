import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import RatingButton from "../RatingButton/RatingButton.js";

const RatingButtonGroup = ({ratingOptions, userRating, hoverHandler, clickHandler}) => {
	if (_.isArray(ratingOptions)) {

		return (
			<div className="rating-button-group">
				{
					_.map(ratingOptions, (ratingOption) => (
						<RatingButton
							key={ratingOption.value}
							buttonValue={ratingOption.value}
							buttonDescription={ratingOption.description}
							userRating={userRating}
							hoverHandler={hoverHandler}
							clickHandler={clickHandler}
						/>
					))
				}
			</div>
		);
	}
	return (
		<div>
			Loading
		</div>
	);
}

RatingButtonGroup.propTypes = {
	ratingOptions: PropTypes.array,
	hoverHandler: PropTypes.func,
	userRating: PropTypes.object
};

export default RatingButtonGroup;
