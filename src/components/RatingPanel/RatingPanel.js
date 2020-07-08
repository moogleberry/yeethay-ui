import "./RatingPanel.css";
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import RatingButton from "../RatingButton/RatingButton.js";

class RatingPanel extends React.Component {
	static get propTypes() {
		return {
			ratingOptions: PropTypes.array,
			hoverHandler: PropTypes.func,
			userRating: PropTypes.object
		};
	}

	createRatingButtons() {
		if (_.isArray(this.props.ratingOptions)) {
			return (
				<div className="rating-panel-buttons">
					{
						_.map(this.props.ratingOptions, (ratingOption) => (
							<RatingButton
								key={ratingOption.value}
								buttonValue={ratingOption.value}
								buttonDescription={ratingOption.description}
								userRating={this.props.userRating}
								hoverHandler={this.props.hoverHandler}
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

	render() {
		return (
			<div>
				{ this.createRatingButtons() }

				<div className="rating-panel-description">
					{ this.props.userRating.description }
				</div>
			</div>
		);
	}
}

export default RatingPanel;
