import "./Rate.css";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import _ from "lodash";

import RatingItemPanel from "../../components/RatingItemPanel/RatingItemPanel.js";
import RatingPanel from "../../components/RatingPanel/RatingPanel.js";
import NextButton from "../../components/NextButton/NextButton.js";

import { fetchUnratedItem } from "../../helpers/httpCalls";

class Rate extends React.Component {
	static get propTypes() {
		return {
			ratingOptions: PropTypes.array
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			ratingItem: {
				name: null,
				pictureUrl: null,
			},
			userRating: {
				value: null,
				description: null,
			},
		};
	}

	componentDidMount() {
		this.fetchUnratedItem()
			.then((data) => this.setRatingItem(data));
	}

	async fetchUnratedItem() {
		return await fetchUnratedItem();
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

	render() {
		return (
			<div>
				<h2 className="page-title">
          Is It Yeet Hay?
				</h2>
				<div className="rate-item-panel">
					<RatingItemPanel
						ratingItem={this.state.ratingItem}
					/>
				</div>
				<div>
					<RatingPanel
						ratingOptions={this.props.ratingOptions}
						userRating={this.state.userRating}
						hoverHandler={this.updateRating.bind(this)}
					/>
				</div>
				<div>
					<NextButton />
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
