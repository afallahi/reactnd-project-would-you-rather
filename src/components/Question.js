import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'
import Avatar from './Avatar'


class Question extends Component {
	render() {
		const { question, author } = this.props
		const { optionOne, timestamp, id } = question
		const { name, avatarURL } = author

		return (
			<Row className="justify-content-center">
				<Col>
					<Card bg="light" className="m-3">
						<Card.Header>
							<Avatar avatarURL={avatarURL} className="mr-2" />
							{name}
						</Card.Header>
						<Card.Body className="text-center">
							<Card.Text>{optionOne.text}? or ...</Card.Text>
							<Link to={`/questions/${id}`}>
								<Button variant="primary">View</Button>
							</Link>
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

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id]

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	}
}

export default connect(mapStateToProps)(Question)
