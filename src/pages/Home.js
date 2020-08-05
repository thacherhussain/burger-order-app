import React from "react";
import { Button, Row, Col, Image, Container } from "react-bootstrap";

const BurgerBuilder = () => {
	return (
		<Container fluid>
			<Row
				style={{ margin: "25px auto", overflowX: "hidden" }}
				className="justify-content-center"
			>
				<Image fluid src={require("../assets/images/burger.jpg")} />
			</Row>
			<Row>
				<Col></Col>
				<Col md={10} sm={10} className="justify-content-center">
					<h1>Home</h1>
					<p>
						Tungg many pats thicc, corgo. Shoob extremely cuuuuuute big ol doing
						me a frighten long woofer porgo shooberino super chub yapper,
						doggorino maximum borkdrive many pats much ruin diet you are doing
						me a frighten lotsa pats.
					</p>
				</Col>
				<Col></Col>
			</Row>
			<Row className="justify-content-center">
				<Button size="lg" href="/burger-builder">Order Now</Button>
			</Row>
		</Container>
	);
};

export default BurgerBuilder;