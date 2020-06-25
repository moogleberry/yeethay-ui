import './Rate.css';
import React from 'react';
import ItemPanel from '../../components/ItemPanel/ItemPanel.js';
import RatingPanel from '../../components/RatingPanel/RatingPanel.js';

class Rate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			item: {
				name: null,
				pictureUrl: null
			},
			rating: {
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
			.then(data => this.setItem(data));
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

	getRatingDescription(value) {
		return this.state.ratingDescriptions[value];
	}

	setRatingDescriptions(obj) {
		this.setState({ratingDescriptions: obj});
		return obj;
	}

	updateRatingDescription(value) {
		let newRating = Object.assign({}, this.state.rating);
		if(value !== null) {
			newRating.value = value;
			newRating.description = this.getRatingDescription(value);
			this.setState({rating: newRating});
		} else {
			newRating.value = null;
			newRating.description = null;
			this.setState({rating: newRating});
		}
	}

	getRatingOptions(value) {
		return this.ratingOptions;
	}

	setRatingOptions(arr) {
		this.setState({ratingOptions: arr});
		return arr;
	}

	setItem(obj) {
		this.setState({item: obj});
		return obj;
	}

	render() {
		return (
			<div>
				<h2 className='page-title'>
					Is It Yeet Hay?
				</h2>
				<div className='rate-item-panel'>
					<ItemPanel 
						item={this.state.item} />
				</div>
				<div>
					<RatingPanel 
						ratingOptions={this.state.ratingOptions}
						rating={this.state.rating} 
						hoverHandler={ this.updateRatingDescription.bind(this) } />
				</div>
			</div>
		);
	}
}

export default Rate;