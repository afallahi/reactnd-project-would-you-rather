import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import { handleNewQuestion } from '../actions/questions'

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false
	}

	onSubmitBtnClick = (e) => {
		const { optionOne, optionTwo } = this.state
		const { dispatch } = this.props

		e.preventDefault()
		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toHome: true
			},
			() => dispatch(handleNewQuestion(optionOne, optionTwo))
		)
	}

	onChoiceChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value
		})
	}


	render() {
		const { optionOne, optionTwo, toHome } = this.state
		if (toHome === true) return <Redirect to="/" />

		return (
			<div>
				<h3 className="text-center my-3"> Would You Rather </h3>
				<Row className="justify-content-center">
					<Col>
						<Card bg="light" className="m-3 text-center">
							<Card.Body>
								<Form onSubmit={this.onSubmitBtnClick}>
									<Form.Group controlId="optionOne">
										<Form.Label>Choice One</Form.Label>
										<Form.Control type="text" name="optionOne" value={optionOne} onChange={this.onChoiceChange} />
									</Form.Group>
									<Form.Label>OR</Form.Label>
									<Form.Group controlId="optionTwo">
										<Form.Label>Choice Two</Form.Label>
										<Form.Control type="text" name="optionTwo" value={optionTwo} onChange={this.onChoiceChange} />
									</Form.Group>
									<Button type="submit" variant="primary" disabled={optionOne === '' || optionTwo === ''}> Submit </Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default connect()(NewQuestion)
