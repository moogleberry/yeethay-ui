import "./Rate.css";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import _ from "lodash";

import RatingItemPanel from "../../components/RatingItemPanel/RatingItemPanel.js";
import RatingButtonGroup from "../../components/RatingButtonGroup/RatingButtonGroup.js";
import RatingDescription from "../../components/RatingDescription/RatingDescription.js";
import NextButton from "../../components/NextButton/NextButton.js";

import { fetchRandomItem, fetchUnratedItem } from "../../helpers/httpCalls";

class Rate extends React.Component {
	static get propTypes() {
		return {
			ratingOptions: PropTypes.array
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			ratingItem: {},
			userRating: {},
		};
	}

	componentDidMount() {
		this.loadRandomItem();
	}

	async loadRandomItem() {
		return await fetchRandomItem()
			.then((data) => this.setRatingItem(data));
	}

	async loadUnratedItem() {
		return await fetchUnratedItem()
			.then((data) => this.setRatingItem(data));
	}

	setRatingItem(obj) {
		this.setState({ ratingItem: obj });
	}

	updateRating(value) {
		const newRating = { ...this.state.userRating };
		if (value !== null) {
			newRating.value = value;
			if (_.isArray(this.props.ratingOptions)) {
				const foundRating = _.find(this.props.ratingOptions, (ratingOption) => ratingOption.value === value);
				if (foundRating) {
					newRating.description = foundRating.description;
				} else {
					newRating.description = null;
				}
			} else {
				newRating.description = null;
			}
			this.setState({ userRating: newRating });
		} else {
			newRating.value = null;
			newRating.description = null;
			this.setState({ userRating: newRating });
		}
	}

	onNextButtonClick() {
		// this.loadUnratedItem(); // always lychee lol
		this.loadRandomItem();
	}

	render() {
		return (
			<div>
				<h2 className="page-title">
          Is It Yeet Hay?
				</h2>
				<div className="rate-item-panel">
					<RatingItemPanel
						ratingItem={this.state.ratingItem} />
				</div>
				<div>
					<RatingButtonGroup 
						ratingOptions={this.props.ratingOptions} 
						userRating={this.state.userRating} 
						hoverHandler={this.updateRating.bind(this)} />
				</div>
				<div>
					<RatingDescription
						userRating={this.state.userRating} />
				</div>
				<div>
					<NextButton 
						onClick={ () => this.onNextButtonClick() } />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { ratingOptions } = state;
	return { ratingOptions };
};

export default connect(mapStateToProps)(Rate);
