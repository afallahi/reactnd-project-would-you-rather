import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { reSetAuthedUser } from '../actions/authedUser'


function Navigation(props) {
	const { user, dispatch } = props

	const onLogoutBtnClick = () => {
		dispatch(reSetAuthedUser())
	}

	return (
		<Navbar bg="light">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav>
					<Nav.Link as={NavLink} to="/" exact> Home </Nav.Link>
					<Nav.Link as={NavLink} to="/add"> New Question </Nav.Link>
					<Nav.Link as={NavLink} to="/leaderboard"> Leaderboard </Nav.Link>
					<NavDropdown title={
						<div className="pull-right">
							<img className="rounded-circle"
							src={user.avatarURL}
							style={{ width: '40px' }}
							/>
							{user.name}
						</div>
					} id="responsive-nav-dropdown">
						<NavDropdown.Item onClick={onLogoutBtnClick}>Logout</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	}
}

export default connect(mapStateToProps)(Navigation)
