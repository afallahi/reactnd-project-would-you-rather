import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'


class PrivateApp extends Component {
    render() {
		return (
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		)
	}
}

export default PrivateApp