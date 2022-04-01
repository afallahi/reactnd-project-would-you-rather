import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import NoPage from './NoPage'
import NewQuestion from './NewQuestion'


class PrivateApp extends Component {
    render() {
		return (
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
                    <Route path="/add" component={NewQuestion} />
                    <Route component={NoPage} />
				</Switch>
			</Router>
		)
	}
}

export default PrivateApp