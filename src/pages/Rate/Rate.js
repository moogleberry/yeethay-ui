import './Rate.css';
import React from 'react';
import RatingItemPanel from '../../components/RatingItemPanel/RatingItemPanel.js';
import RatingPanel from '../../components/RatingPanel/RatingPanel.js';
import { connect } from "react-redux";
import _ from 'lodash';

class Rate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ratingItem: {
				name: null,
				pictureUrl: null
			},
			userRating: {
				value: null,
				description: null
			}
		};

	}

	componentDidMount() {
		this.fetchDummyItem()
			.then(data => this.setRatingItem(data));
	}

	async fetchDummyItem() {
		let response = await fetch("/data/ginger.json");
		let data = await response.json();
		return data;
	}

	setRatingItem(obj) {
		this.setState({ratingItem: obj});
	}

	updateRating(value) {
		let newRating = Object.assign({}, this.state.userRating);
		if(value !== null) {
			newRating.value = value;
			if(_.isObject(this.props.ratingDescriptions)) {
				newRating.description = this.props.ratingDescriptions[value];
			} else {
				newRating.description = null;
			}
			this.setState({userRating: newRating});
		} else {
			newRating.value = null;
			newRating.description = null;
			this.setState({userRating: newRating});
		}
	}

	render() {
		return (
			<div>
				<h2 className='page-title'>
					Is It Yeet Hay?
				</h2>
				<div className='rate-item-panel'>
					<RatingItemPanel 
						ratingItem={this.state.ratingItem} />
				</div>
				<div>
					<RatingPanel 
						ratingOptions={this.props.ratingOptions}
						userRating={this.state.userRating} 
						hoverHandler={ this.updateRating.bind(this) } />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { ratingOptions, ratingDescriptions } = state;
	return { ratingOptions, ratingDescriptions };
}

export default connect(mapStateToProps)(Rate);