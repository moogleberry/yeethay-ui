import React from 'react';
import Navigation from './Navigation.js';
import Main from './Main.js';

import store from './redux/store';
import { connect } from 'react-redux';
import { setRatingOptions, setRatingDescriptions } from './redux/actions.js';
import rootReducer from './redux/reducers.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		this.fetchRatingOptions()
			.then(data => {
				this.props.setRatingOptions(data);
			})
			.finally(() => {
				console.log(store.getState());
			});
		this.fetchRatingDescriptions()
			.then(data => {
				this.props.setRatingDescriptions(data);
			})
			.finally(() => {
				console.log(store.getState());
			});
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

	render() {
		return (
			<div className='App'>
				<Navigation />
				<Main />
			</div>
		);
	}
} 

export default connect(
	null,
	{ setRatingOptions, setRatingDescriptions }
)(App);
