import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Tab, Tabs} from 'react-bootstrap'
import QuestionsList from './QuestionsList'

class Home extends Component {
	render() {
		const { answeredQIds, unansweredQIds } = this.props

		return (
			<Fragment>
				<Tabs>
					<Tab eventKey="unanswered" title="Unanswered">
						<QuestionsList
							idsList={unansweredQIds}
							emptyListMessage="No Unswered Questions"
						/>
					</Tab>
					<Tab eventKey="answered" title="Answered">
						<QuestionsList
							idsList={answeredQIds}
							emptyListMessage="No Answered Questions"
						/>
					</Tab>
				</Tabs>
			</Fragment>
		)
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredQIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp)

	const unansweredQIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp)

	return {
		answeredQIds,
		unansweredQIds
	}
}

export default connect(mapStateToProps)(Home)
