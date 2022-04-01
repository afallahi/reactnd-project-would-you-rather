import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import NoPage from './NoPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'


class PrivateApp extends Component {
    render() {
		return (
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
                    <Route path="/questions/:id" component={QuestionPage} />
                    <Route path="/add" component={NewQuestion} />
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route component={NoPage} />
				</Switch>
			</Router>
		)
	}
}

export default PrivateApp