import "./RatingButton.css";
import React from "react";
import PropTypes from "prop-types";
import RatingIcon from "../RatingIcon/RatingIcon.js";

class RatingButton extends React.Component {
	static get propTypes() {
		return {
			buttonValue: PropTypes.number,
			buttonDescription: PropTypes.string,
			hoverHandler: PropTypes.func,
			userRating: PropTypes.object
		};
	}

	ratingButtonClick(buttonValue) {
		console.log(buttonValue);
	}

	render() {
		return (
			<button
				type="submit"
				className="rating-button"
				value={this.props.buttonValue}
				aria-label={this.props.buttonDescription}
				onMouseEnter={() => this.props.hoverHandler(this.props.buttonValue)}
				onMouseLeave={() => this.props.hoverHandler(null)}
				onClick={() => this.ratingButtonClick(this.props.buttonValue)}
			>

				<RatingIcon
					buttonValue={this.props.buttonValue}
					userRating={this.props.userRating}
				/>
			</button>
		);
	}
}

export default RatingButton;
