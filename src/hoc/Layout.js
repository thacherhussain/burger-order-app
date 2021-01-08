import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import LoginModal from 'components/UI/LoginModal'
import SignUpModal from 'components/UI/SignUpModal'

const NavLink = ({ to, children, onClick }) => (
	<Nav.Link onClick={onClick} as={Link} to={to}>
		{children}
	</Nav.Link>
)
const Layout = (props) => {
  const [user] = useAuthState(auth)

	const location = useLocation()
	const [expanded, setExpanded] = useState(false)

	const [showSignUp, setShowSignUp] = useState(false)
	const handleCloseSignUp = () => setShowSignUp(false)
	const handleShowSignUp = () => setShowSignUp(true)

	const [showLogin, setShowLogin] = useState(false)
	const handleCloseLogin = () => setShowLogin(false)
	const handleShowLogin = () => setShowLogin(true)

	useEffect(() => {
		setExpanded(false)
	}, [location.key])

	return (
		<>
			<Navbar expanded={expanded} bg='light' expand='sm'>
				<Navbar.Brand href='/'>
					<img
						alt=''
						src={require('../assets/images/burger-logo.png')}
						height='30'
						className='d-inline-block align-top'
					/>{' '}
					Good Burger
				</Navbar.Brand>
				<Navbar.Toggle onClick={() => setExpanded(!expanded)} />
				<Navbar.Collapse className='justify-content-between'>
					<Nav>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/burger-builder'>Burger Builder</NavLink>
						{ user && <NavLink to='/orders'>Orders</NavLink> }
					</Nav>
					<Form inline>
						{ user ? (
							<NavLink to='/' onClick={() => auth.signOut()}>Logout</NavLink>
						) : (
							<>
								<Button variant='primary' onClick={handleShowLogin} style={{ marginRight: 10}}>
									Login
								</Button>
								<Button variant='outline-primary' onClick={handleShowSignUp}>
									Sign Up
								</Button>
							</>
						)}
					</Form>
				</Navbar.Collapse>
			</Navbar>

			<SignUpModal show={showSignUp} onClose={handleCloseSignUp} />
			<LoginModal show={showLogin} onClose={handleCloseLogin} />

			<Container>{props.children}</Container>
		</>
	)
}

export default Layout
