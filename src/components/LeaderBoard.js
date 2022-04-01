import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserResults from './UserResults'

class LeaderBoard extends Component {
	render() {
		return (
			<div>
				<h3 className="text-center my-3"> LeaderBoard </h3>
				{this.props.userIds.map((id) => (
					<UserResults key={id} id={id} />
				))}
			</div>
		)
	}
}

function mapStateToProps({ users }) {
	const sortedUserIds = Object.keys(users).sort((id1, id2) => {
		const score1 =
			Object.keys(users[id1].answers).length + users[id1].questions.length
		const score2 =
			Object.keys(users[id2].answers).length + users[id2].questions.length

		return score2 - score1
	})

	return {
		userIds: sortedUserIds
	}
}

export default connect(mapStateToProps)(LeaderBoard)
