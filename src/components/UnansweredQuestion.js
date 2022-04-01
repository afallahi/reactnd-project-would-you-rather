import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import { handleAddAnswer } from '../actions/questions'
import { formatDate } from '../utils/helpers'
import NoPage from './NoPage'
import Avatar from './Avatar'


class UnansweredQuestion extends Component {
	state = {
		errorMessage: ''
	}

	onSelectBtnClick = (id, e) => {
		const answer = this.form.answer.value
		const { dispatch } = this.props

		e.preventDefault()
		if (answer !== '') {
			dispatch(handleAddAnswer(id, answer))
		} else {
			this.setState({ errorMessage: 'Please select' })
		}
	}

	render() {
		const { question, author } = this.props

		if (question === null) {
			return <NoPage />
		}

		const { optionOne, optionTwo, timestamp, id } = question
		const { name, avatarURL } = author
		const { errorMessage } = this.state

		return (
			<Row className="justify-content-center">
				<Col>
					<Card bg="light" className="m-3">
						<Card.Header>
							<Avatar avatarURL={avatarURL} className="mr-2" />
							{name}
						</Card.Header>

						<Card.Body className="d-flex justify-content-center">
							<Form
								onSubmit={(e) => this.onSelectBtnClick(id, e)}
								ref={(f) => (this.form = f)}
							>
								{errorMessage ? (
									<p className="text-danger">{errorMessage}</p>
								) : null}
								<Form.Check
									custom type="radio" id="optionOne" label={optionOne.text}
									value="optionOne" name="answer" className="mb-2" >
								</Form.Check>
								<Form.Check
									custom type="radio" id="optionTwo" label={optionTwo.text}
									value="optionTwo" name="answer" className="mb-2" >
								</Form.Check>								
								<Button type="submit" variant="primary"> Select </Button>
							</Form>
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

export default connect(mapStateToProps)(UnansweredQuestion)
