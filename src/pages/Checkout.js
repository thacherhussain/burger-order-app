import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useOrderStore } from "context/orderContext";

const Checkout = () => {
	const { ingredients } = useOrderStore();

	return (
		<>
			<Helmet>
				<title>Checkout | Good Burger</title>
			</Helmet>
			<Container fluid>
				<Row>
					<ul>
						{Object.entries(ingredients).map(([key, value]) => (
							<li>
								{key} - {value}
							</li>
						))}
					</ul>
				</Row>
				<Row>
					<Col md={10} sm={10} className="justify-content-center">
						<h1>Checkout</h1>
						<p>Order #</p>
						<p>Order</p>
						<p>Price</p>
						<p>User Name</p>
						<p>User Address</p>
					</Col>
					<Col lg={{ offset: 2 }}>
						<h3>Enter Your Information</h3>
						<Form>
							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Hermione Granger" />
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="ceo@spew.org" />
							</Form.Group>
							<Form.Group>
								<Form.Label>Street Address</Form.Label>
								<Form.Control type="text" placeholder="3429 Ministry Street" />
							</Form.Group>
							<Form.Group>
								<Form.Label>Zipcode</Form.Label>
								<Form.Control type="text" placeholder="87217" />
							</Form.Group>
							<Form.Group controlId="formDeliveryMethod">
								<Form.Label>Delivery Method</Form.Label>
								<Form.Control as="select">
									<option>Standard</option>
									<option>FedEx</option>
									<option>Owl</option>
									<option>Slow</option>
								</Form.Control>
							</Form.Group>
						</Form>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Button size="lg" as={Link} to="/burger-builder">
						Confirm
					</Button>
				</Row>
			</Container>
		</>
	);
};

export default Checkout;
