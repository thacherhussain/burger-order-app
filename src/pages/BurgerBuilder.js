import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useHistory, Link } from "react-router-dom";

import IngredientButton from "components/Burger/BuildControls/IngredientButton";

const ingredients = ["beef", "bacon", "lettuce", "tomato", "ketchup"];

const BurgerBuilder = () => {
	const [values, setValues] = useState({});
	const history = useHistory(); // TODO: use this

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
				<Row>
					<ul>
						{ingredients.map((ingredient) => (
							<IngredientButton
								onClick={(newValue) => {
									setValues({ ...values, [ingredient]: newValue });
								}}
								value={values[ingredient]}
								ingredient={ingredient}
							/>
						))}
					</ul>
				</Row>
				<Row className="justify-content-center" style={{paddingBottom: '10px'}}>
					<Button onClick={handleSubmit} size="lg">Submit</Button>
				</Row>
				<Row className="justify-content-center">
					<Button size="lg" as={Link} to="/checkout">Checkout</Button>
				</Row>
			</Container>
		</>
	);
};

export default BurgerBuilder;
