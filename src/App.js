import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./custom.scss";

import Layout from "./hoc/Layout";
import BurgerBuilder from "./pages/BurgerBuilder";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

import { OrderProvider } from "context/orderContext";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<OrderProvider>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/burger-builder" exact>
							<BurgerBuilder />
						</Route>
						<Route path="/orders" exact>
							<Orders />
						</Route>
						<Route path="/checkout" exact>
							<Checkout />
						</Route>
					</Switch>
				</OrderProvider>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
