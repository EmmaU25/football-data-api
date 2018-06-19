import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Geolocalisation from './components/Geolocalisation';
import Ligues from './components/Ligues';
import Details from './components/Details'
import Jouers from './components/Jouers'
import menuLigues from './components/menuLigues'
import TableLigue from './components/TableLigue'
import matchs from './components/matchs'

const AppRoutes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={ Home } />
			<Route path="/ligues" exact component={ Ligues } />
			<Route path="/menu" exact component={ menuLigues } />
			<Route path="/geolocalisation" exact component={ Geolocalisation } />
			<Route path="/matchs/:id" exact component={ matchs } />
			<Route path="/details/:id" exact component={ Details } />
			<Route path="/table/:id" exact component={ TableLigue } />
			<Route path="/jouers" exact component={ Jouers } />

		</Switch>
	</BrowserRouter>
);
export default AppRoutes;