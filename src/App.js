import "./App.css";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Rate from "./components/Rate/Rate";

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
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/rate" component={Rate} />
				</Switch>
			</div>
		);
	}
}

export default connect(
	null,
	{ setRatingOptions },
)(App);
