import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./hoc/Layout";
import BurgerBuilder from "./pages/BurgerBuilder";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

const App = () => {
	return (
		<BrowserRouter>
		<Layout>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/burger-builder" exact component={BurgerBuilder} />
				<Route path="/orders" exact component={Orders} />
			</Switch>
		</Layout>
		</BrowserRouter>
	);
};

export default App;
