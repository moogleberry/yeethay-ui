import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Main from "./Main";

import { setRatingOptions } from "./redux/actions";
import { fetchRatingOptions } from "./helpers/httpCalls";

class App extends React.Component {
	static get propTypes() {
		return {
			setRatingOptions: PropTypes.func
		};
	}

	componentDidMount() {
		this.fetchRatingOptions()
			.then((data) => {
				this.props.setRatingOptions(data);
			});
	}

	async fetchRatingOptions() {
		return await fetchRatingOptions();
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
