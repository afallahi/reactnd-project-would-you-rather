import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'


class QuestionPage extends Component {
	render() {
		const { userAnsweres, match } = this.props
		const id = match.params.id
		const answered = userAnsweres.hasOwnProperty(id) ? true : false

		return (
			<Fragment>
				<h3 className="text-center my-3"> Would You Rather </h3>
				{answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
			</Fragment>
		)
	}
}

function mapStateToProps({ authedUser, users }) {
	const userAnsweres = users[authedUser].answers

	return {
		userAnsweres
	}
}


export default connect(mapStateToProps)(QuestionPage)
