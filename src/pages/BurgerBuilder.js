import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import Burger from 'components/Burger/Burger';
import IngredientButton from "components/Burger/IngredientButton";
import OrderConfirmationModal from "components/UI/OrderConfirmationModal";

const ingredients = [ "salad", "bacon", "cheese", "meat"];

const BurgerBuilder = () => {
	const [values, setValues] = useState({});
	const history = useHistory(); // TODO: use this

	const [show, setShow] = useState(false);
	const [hasIngredients, setHasIngredients] = useState(false);

	const handleClose = () => setShow(false);

	const handleSubmit = () => {
		setShow(true);
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

	useEffect(() => {
		if (Object.values(values).reduce((sum, el) => sum + el, 0) > 0) {
			setHasIngredients(true);
		} else {
			setHasIngredients(false);
		}
	}, [values]);

	return (
		<>
			<Helmet>
				<title>Build a Burger | Good Burger</title>
			</Helmet>
			<Container fluid>
				<Row>
					<Col md={10} sm={10} className="justify-content-center">
						<h1>Burger Builder</h1>
					</Col>
				</Row>
				<Row className="justify-content-center">
						<Burger ingredients={values}/>
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
					<OrderConfirmationModal
						show={show}
						onClose={handleClose}
						ingredients={ingredients}
						values={values}
					/>
				</Row>
				<Row className="justify-content-center my-3">
					<Button size="lg" onClick={handleSubmit} disabled={!hasIngredients}>
						Submit
					</Button>
				</Row>
			</Container>
		</>
	);
};

export default BurgerBuilder;
