import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, ProgressBar } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'
import NoPage from './NoPage'
import Avatar from './Avatar'

class AnsweredQuestion extends Component {
	render() {
		const { question, author, authedUser } = this.props

		if (question === null) {
			return <NoPage />
		}

		const { optionOne, optionTwo, timestamp } = question
		const { name, avatarURL } = author
		const totalVotes = optionOne.votes.length + optionTwo.votes.length
		const optionOnePercent = Math.round((optionOne.votes.length / totalVotes) * 100)
		const optionTwoPercent = Math.round((optionTwo.votes.length / totalVotes) * 100)

		return (
			<Row className="justify-content-center">
				<Col>
					<Card bg="light" className="m-3">
						<Card.Header>
							<Avatar avatarURL={avatarURL} className="mr-2" />
							{name}
						</Card.Header>
						<Card.Body className="d-flex justify-content-center">
							<ul>
								<li>
									{optionOne.text}
									{optionOne.votes.includes(authedUser) ? (
										<span className="text-danger ml-2">
											&lt;- Your choice
										</span>
									) : null}
								</li>
								<ProgressBar
									now={optionOnePercent}
									label={`${optionOnePercent}%`}
									variant="info"
								/>
								<Card.Text className="text-muted">
									{optionOne.votes.length} out of {totalVotes}{' '}
									users had this choice
								</Card.Text>
								<li>
									{optionTwo.text}
									{optionTwo.votes.includes(authedUser) ? (
										<span className="text-danger ml-2">
											&lt;- Your choice
										</span>
									) : null}
								</li>
								<ProgressBar
									now={optionTwoPercent}
									label={`${optionTwoPercent}%`}
									variant="info"
								/>
								<Card.Text className="text-muted">
									{optionTwo.votes.length} out of {totalVotes}{' '}
									users had this choice
								</Card.Text>
							</ul>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">{formatDate(timestamp)}</small>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id]

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authedUser
	}
}

export default connect(mapStateToProps)(AnsweredQuestion)
