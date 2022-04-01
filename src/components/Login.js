import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Card, Row, Col, Form, Button} from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

    state = {
		errorMessage: ''
	}

	onLoginBtnClick = (e) => {
		const userId = this.userId.value
		const { dispatch } = this.props

		e.preventDefault()
		if (userId !== '') {
			dispatch(setAuthedUser(userId))
		} else {
			this.setState({ errorMessage: 'Choose a user to login' })
		}
	}

    render() {
		const { userNames } = this.props
		const { errorMessage } = this.state

		return (
			<Row>
				<Col>
					<Card bg="light" className="text-center">
						<Card.Header>Would You Rather</Card.Header>
						<Card.Body>
							<Form onSubmit={this.onLoginBtnClick}>
								<Form.Group>									
									{errorMessage ? ( <p className="text-danger">{errorMessage}</p> ) : <p></p>}
									<Form.Control as="select" ref={(id) => (this.userId = id)} >
										<option value="">Select a user</option>
										{userNames.map((item) => (
											<option value={item.value} key={item.value}> {item.label} </option>
										))}
									</Form.Control>
								</Form.Group>

								<Button type="submit" variant="primary">
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		)
	}

}


function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	}
}

export default connect(mapStateToProps)(Login)