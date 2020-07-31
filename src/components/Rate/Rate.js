import "./Rate.css";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import _ from "lodash";

import RatingItemPanel from "../RatingItemPanel/RatingItemPanel";
import RatingButtonGroup from "../RatingButtonGroup/RatingButtonGroup";
import RatingDescription from "../RatingDescription/RatingDescription";
import NextButton from "../NextButton/NextButton";

import { fetchRandomItem, fetchUnratedItem, rateItem } from "../../helpers/httpCalls";

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
			sendingRating: false
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

	setRatingItem(ratingItem) {
		this.setState({ ratingItem: ratingItem });
	}

	updateRating(ratingValue) {
		const newRating = { ...this.state.userRating };
		if (ratingValue !== null) {
			newRating.value = ratingValue;
			if (_.isArray(this.props.ratingOptions)) {
				const foundRating = _.find(this.props.ratingOptions, (ratingOption) => ratingOption.value === newRating.value);
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

	ratingClickHandler(ratingValue) {
		this.setState({sendingRating: true});
		rateItem(this.state.ratingItem.id, ratingValue, "foo")
			.then((response) => {
				this.loadRandomItem();
			})
			.finally(() => {
				this.setState({sendingRating: false});
			});
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
						hoverHandler={this.updateRating.bind(this)} 
						clickHandler={this.ratingClickHandler.bind(this)} />
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
