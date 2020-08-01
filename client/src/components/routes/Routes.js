import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../layout/NotFound';
import Shop from '../subpages/Shop';
import Orders from '../subpages/Orders';
import About from '../subpages/About';

export default function Routes() {
	return (
		<div>
			<Switch>
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/orders" component={Orders} />
				<Route exact path="/about" component={About} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}
