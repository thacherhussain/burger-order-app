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
			<p style={{fontSize: 12}}>Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/s/photos/burger?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
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
