import './Rate.css';
import React from 'react';
import RatingItemPanel from '../../components/RatingItemPanel/RatingItemPanel.js';
import RatingPanel from '../../components/RatingPanel/RatingPanel.js';

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
			},
			ratingDescriptions: {},
			ratingOptions: []
		};

	}

	componentDidMount() {
		this.fetchRatingOptions()
			.then(data => this.setRatingOptions(data));
		this.fetchRatingDescriptions()
			.then(data => this.setRatingDescriptions(data));
		this.fetchDummyItem()
			.then(data => this.setRatingItem(data));
	}

	async fetchRatingOptions() {
		let response = await fetch("/data/ratingOptions.json");
		let data = await response.json();
		return data;
	}

	async fetchRatingDescriptions() {
		let response = await fetch("/data/ratingDescriptions.json");
		let data = await response.json();
		return data;
	}

	async fetchDummyItem() {
		let response = await fetch("/data/ginger.json");
		let data = await response.json();
		return data;
	}

	setRatingOptions(arr) {
		this.setState({ratingOptions: arr});
	}

	setRatingDescriptions(obj) {
		this.setState({ratingDescriptions: obj});
	}

	setRatingItem(obj) {
		this.setState({ratingItem: obj});
	}

	updateRating(value) {
		let newRating = Object.assign({}, this.state.userRating);
		if(value !== null) {
			newRating.value = value;
			newRating.description = this.state.ratingDescriptions[value];
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
						ratingOptions={this.state.ratingOptions}
						userRating={this.state.userRating} 
						hoverHandler={ this.updateRating.bind(this) } />
				</div>
			</div>
		);
	}
}

export default Rate;