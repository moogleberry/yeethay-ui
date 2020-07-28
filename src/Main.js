import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Rate from "./pages/Rate/Rate.js";

const Main = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/rate" component={Rate} />
	</Switch>
);

export default Main;
