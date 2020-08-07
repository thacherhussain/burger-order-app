import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import axios from "../axios-orders";
import Order from "../components/Order";
import { Helmet } from "react-helmet";

const Orders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios("/orders.json");
			setOrders(Object.values(result.data));
		};
		fetchData();
	}, []);
	console.log(orders);

	return (
		<>
		<Helmet>
			<title>Orders | Good Burger</title>
		</Helmet>
		<Container fluid>
			<Row>
				<Col></Col>
				<Col md={10} sm={10} className="justify-content-center">
					<h1>Orders</h1>
					{orders.map((order) => (
						<Order
							key={order.customer.email}
							name={order.customer.name}
							email={order.customer.email}
							ingredients={order.ingredients}
							deliveryMethod={order.deliveryMethod}
							price={order.price}
						/>
					))}
				</Col>
				<Col></Col>
			</Row>
		</Container>
		</>
	);
};

export default Orders;
