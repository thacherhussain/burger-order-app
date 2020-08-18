import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { get } from "lodash";
import { v4 as uuidv4 } from "uuid";

import axios from "axios-orders";
import { useOrderStore } from "context/orderContext";

/* TODO: Setup SCHEDULE MY ORDER modal (Mockup of Tidepool component) */

const Checkout = () => {
	const { ingredients, totalPrice } = useOrderStore();

	const history = useHistory();
	const orderId = uuidv4();
	const customerId = uuidv4();
	const { register, handleSubmit, errors } = useForm();

	const orderHandler = (values) => {
		const order = {
			orderId: orderId,
			ingredients: ingredients,
			price: totalPrice,
			customer: {
				customerId: customerId,
				name: values.name,
				email: values.email,
				address: values.address,
			},
			deliveryMethod: values.deliveryMethod,
		};
		console.log("order: " + order.customer.name);
		axios
			.post("/orders.json", order)
			.then((response) => {
				history.push("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Helmet>
				<title>Checkout | Good Burger</title>
			</Helmet>
			<Container fluid>
				<Row></Row>
				<Row>
					<Col md={10} sm={10} className="justify-content-center">
						<h1>Checkout</h1>
						<p>Order Summary</p>
						<ul>
							{Object.entries(ingredients).map(([key, value]) => (
								<li>
									{key} - {value}
								</li>
							))}
						</ul>
						<p>Total Price ${Number.parseFloat(totalPrice).toFixed(2)}</p>
					</Col>
				</Row>
				<Row>
					<Col lg={{ offset: 2 }}>
						<h3>Enter Your Information</h3>
						<Form onSubmit={handleSubmit(orderHandler)}>
							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									ref={register({ required: true })}
									placeholder="Hermione Granger"
									/>
									{errors.name && <Form.Text style={{color: 'red'}}>Name is required</Form.Text>}
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									ref={register({ required: true })}
									placeholder="ceo@spew.org"
								/>
								{errors.email && <Form.Text style={{color: 'red'}}>Email is required</Form.Text>}
							</Form.Group>
							<Form.Group>
								<Form.Label>Street Address</Form.Label>
								<Form.Control
									type="text"
									name="address.street"
									ref={register({ required: true })}
									placeholder="3429 Ministry Street"
								/>
								{get(errors, "address.street") && (
									<Form.Text style={{color: 'red'}}>Street Address is required</Form.Text>
								)}
							</Form.Group>
							<Form.Group>
								<Form.Label>Zipcode</Form.Label>
								<Form.Control
									type="text"
									name="address.zipcode"
									ref={register({ required: true })}
									placeholder="87217"
								/>
								{get(errors, "address.zipcode") && (
									<Form.Text style={{color: 'red'}}>Zipcode is required</Form.Text>
								)}
							</Form.Group>
							<Form.Group controlId="formDeliveryMethod">
								<Form.Label>Delivery Method</Form.Label>
								<Form.Control as="select" name="deliveryMethod" ref={register}>
									<option>Standard</option>
									<option>FedEx</option>
									<option>Owl</option>
									<option>Slow</option>
								</Form.Control>
							</Form.Group>
							<Row className="justify-content-center">
								<Button size="lg" type="submit">
									Confirm
								</Button>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Checkout;
