import React, { useState, useEffect, FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap"
// import Banners from 'components/Banners';
import SignInModal from "components/UI/SignInModal"

type NavLinkProps = {
	to: string
	onClick?: () => void
}
const NavLink: FC<NavLinkProps> = ({ to, children, onClick }) => (
	<Nav.Link onClick={onClick} as={Link} to={to}>
		{children}
	</Nav.Link>
)

const Layout: FC = ({ children }) => {
	const location = useLocation()
	const [expanded, setExpanded] = useState(false)

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	// const [showBanner, setShowBanner] = useState(true);
	// const handleBannerClose = () => setShowBanner(false);

	useEffect(() => {
		setExpanded(false)
	}, [location.key])

	return (
		<>
			<Navbar expanded={expanded} bg='light' expand='sm'>
				<Navbar.Brand href='/burger-builder'>
					<img
						alt=''
						src={require("../assets/images/burger-logo.png")}
						height='30'
						className='d-inline-block align-top'
					/>{" "}
					Good Burger
				</Navbar.Brand>
				<Navbar.Toggle onClick={() => setExpanded(!expanded)} />
				<Navbar.Collapse className='justify-content-between'>
					<Nav>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/burger-builder'>Burger Builder</NavLink>
						<NavLink to='/orders'>Orders</NavLink>
					</Nav>
					<Form inline>
						<Button variant='outline-primary' onClick={handleShow}>
							Login
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<SignInModal show={show} onClose={handleClose} />
			{/* <Banners show={showBanner} onClose={handleBannerClose}/> */}
			<Container>{children}</Container>
		</>
	)
}

export default Layout
