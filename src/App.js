import React from "react";
import World from "./World";
import Nav from "./Nav";
import Home from "./Home";
import Symptoms from "./Symptoms";
import Links from "./Links";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route path="/World" component={World} />
					<Route path="/" exact component={Home} />
					<Route path="/Links" component={Links} />
					<Route path="/Symptoms" component={Symptoms} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
