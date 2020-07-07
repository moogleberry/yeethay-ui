import React from 'react';
import Navigation from './Navigation.js';
import Main from './Main.js';

import { connect } from 'react-redux';
import { setRatingOptions } from './redux/actions.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		this.fetchRatingOptions()
			.then(data => {
				this.props.setRatingOptions(data);
			});
	}

	async fetchRatingOptions() {
		let response = await fetch("/data/ratingOptions.json");
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
	{ setRatingOptions }
)(App);
