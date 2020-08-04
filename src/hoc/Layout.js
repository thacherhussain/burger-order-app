import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Layout = (props) => {
	return (
		<span>
			<Navbar bg="light" expand="sm">
				<Navbar.Brand href="/">
                    <img
                        alt=""
                        src={require("../assets/images/burger-logo.png")}
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Good Burger
                </Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/burger-builder">Burger Builder</Nav.Link>
						<Nav.Link href="/orders">Orders</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>{props.children}</Container>
		</span>
	);
};

export default Layout;
