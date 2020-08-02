import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../layout/NotFound';
import Shop from '../subpages/Shop';
import Orders from '../subpages/Orders';
import About from '../subpages/About';
import ProductDetails from '../subpages/ProductDetails';
import Cart from '../subpages/Cart';
import SignIn from '../subpages/SignIn';
import Register from '../subpages/Register';

export default function Routes() {
	return (
		<div>
			<Switch>
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/orders" component={Orders} />
				<Route exact path="/about" component={About} />
				<Route path="/product/:id" component={ProductDetails} />
				<Route path="/cart/:id?" component={Cart} />
				<Route path="/signin" component={SignIn} />
				<Route path="/register" component={Register} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}
