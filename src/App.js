import React from "react";
import World from "./World";
import Nav from "./Nav";
import Home from "./Home";
import Symptoms from "./Symptoms";
import {Switch, Route, HashRouter } from "react-router-dom";

function App() {
	return (
		
		<HashRouter>
			<div>
				<Nav />
				<Switch>
					<Route path="/World" component={World} />
					<Route path="/" exact component={Home} />
					<Route path="/Symptoms" component={Symptoms} />
				</Switch>
			</div>
		</HashRouter>
	
	);
}

export default App;
