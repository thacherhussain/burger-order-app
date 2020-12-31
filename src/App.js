import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './custom.scss'

import { AuthRoute } from './components/router/AuthRoute'
import Layout from './hoc/Layout'
import BurgerBuilder from './pages/BurgerBuilder'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Checkout from './pages/Checkout'

import { OrderProvider } from 'context/orderContext'

const App = () => (
<OrderProvider>
	<Router />
</OrderProvider>
)

const Router = React.memo(() => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/burger-builder' component={BurgerBuilder} exact />
					<AuthRoute path='/orders' component={Orders} exact />
					<Route path='/checkout' component={Checkout} exact />
					<Redirect from='*' to='/' />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
})

export default App
