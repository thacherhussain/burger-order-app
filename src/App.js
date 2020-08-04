import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BurgerBuilder from "./pages/BurgerBuilder";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={BurgerBuilder} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
