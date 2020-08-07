import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";

const NavLink = ({ to, children, onClick }) => (
	<Nav.Link onClick={onClick} as={Link} to={to}>{children}</Nav.Link>
)
const Layout = (props) => {
	const location = useLocation();
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		setExpanded(false);
	}, [location.key]);

	return (
		<span>
			<Navbar expanded={expanded} bg="light" expand="sm">
				<Navbar.Brand href="/">
                    <img
                        alt=""
                        src={require("../assets/images/burger-logo.png")}
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Good Burger
                </Navbar.Brand>
				<Navbar.Toggle onClick={() => setExpanded(!expanded)} />
				<Navbar.Collapse>
					<Nav>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/burger-builder">Burger Builder</NavLink>
						<NavLink to="/orders">Orders</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>{props.children}</Container>
		</span>
	);
};

export default Layout;
