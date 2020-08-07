import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Checkout = () => {
	return (
		<>
		<Helmet>
			<title>Checkout | Good Burger</title>
		</Helmet>
		<Container fluid>
			<Row>
				<Col></Col>
				<Col md={10} sm={10} className="justify-content-center">
					<h1>Checkout</h1>
					<p>Order #</p>
					<p>Order</p>
					<p>Price</p>
					<p>User Name</p>
					<p>User Address</p>
				</Col>
				<Col></Col>
			</Row>
			<Row className="justify-content-center">
				<Button size="lg" as={Link} to="/burger-builder">Confirm</Button>
			</Row>
		</Container>
		</>
	);
};

export default Checkout;
