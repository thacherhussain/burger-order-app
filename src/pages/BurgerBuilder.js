import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useHistory, Link } from "react-router-dom";

import IngredientButton from "components/Burger/BuildControls/IngredientButton";

const ingredients = ["beef", "bacon", "lettuce", "tomato", "ketchup"];

const BurgerBuilder = () => {
	const [values, setValues] = useState({});
	const history = useHistory(); // TODO: use this
	const [purchasing, setPurchasing] = useState(false);

	const handleSubmit = () => {
		// TODO: make this open confirmation showing current ingredients
		console.log(values);
	};

	useEffect(() => {
		// TODO: Implement axios and grab data from firebase
		setTimeout(() => {
			const initialValues = ingredients.reduce((acc, item) => {
				acc[item] = 0;
				return acc;
			}, {});
			setValues(initialValues);
		}, 1500);
	}, []);
	console.log(values);

	const purchasingHandler = () => {
		setPurchasing(!purchasing);
	};

	return (
		<>
			<Helmet>
				<title>Build a Burger | Good Burger</title>
			</Helmet>
			<Container fluid>
				<Row center>
					<Col md={10} sm={10} className="justify-content-center">
						<h1>Burger Builder</h1>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<span>
						{ingredients.map((ingredient) => (
							<IngredientButton
								onClick={(newValue) => {
									setValues({ ...values, [ingredient]: newValue });
								}}
								value={values[ingredient]}
								ingredient={ingredient}
							/>
						))}
					</span>
				</Row>
				<Row>
					{purchasing && (
						<Modal.Dialog>
							<Modal.Header closeButton>
								<Modal.Title>Modal title</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<ul>
									{ingredients.map((ingredient) => (
										<li>
											<span>{ingredient}</span>
											<span>({values[ingredient]})</span>
										</li>
									))}
								</ul>
							</Modal.Body>

							<Modal.Footer>
								<Button variant="secondary" onClick={purchasingHandler}>
									Cancel
								</Button>
								<Button variant="primary" as={Link} to="/checkout">
									Checkout
								</Button>
							</Modal.Footer>
						</Modal.Dialog>
					)}
				</Row>
				<Row className="justify-content-center">
					<Button onClick={purchasingHandler} size="lg">
						Submit
					</Button>
				</Row>
			</Container>
		</>
	);
};

export default BurgerBuilder;
