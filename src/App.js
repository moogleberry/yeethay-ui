import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import Main from "./Main";

import { setRatingOptions } from "./redux/actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
	static get propTypes() {
		return {
			setRatingOptions: PropTypes.array
		};
	}

	componentDidMount() {
		this.fetchRatingOptions()
			.then((data) => {
				this.props.setRatingOptions(data);
			});
	}

	async fetchRatingOptions() {
		const response = await fetch("/data/ratingOptions.json");
		const data = await response.json();
		return data;
	}

	render() {
		return (
			<div className="App">
				<Navigation />
				<Main />
			</div>
		);
	}
}

export default connect(
	null,
	{ setRatingOptions },
)(App);
