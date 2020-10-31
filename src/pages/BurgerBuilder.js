import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

import axios from "../axios-orders";
import Burger from "components/Burger/Burger";
import ControlPanel from "components/Burger/ControlPanel";
import { useOrderStore, useOrderDispatch } from "context/orderContext";

const BurgerBuilder = () => {
	const { ingredients, error } = useOrderStore();
	const dispatch = useOrderDispatch();
	const [show, setShow] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const [response] = await Promise.all([
					axios.get(
						"https://burger-generator-cdbeb.firebaseio.com/%22bigIngredients%22.json"
					),
				]);

				const prices = response.data.reduce((acc, ingredient) => {
					acc[ingredient.name] = ingredient.cost;
					return acc;
				}, {});

				const ingredients = response.data.reduce(
					(acc, ingredient) => {
						acc[ingredient.name] = ingredient.defaultValue;
						return acc;
					},
					{}
				);

				dispatch({
					type: "INIT",
					payload: {
						ingredients: ingredients,
						prices: prices,
					},
				});
			} catch (error) {
				dispatch({ type: "ERROR" });
			}
		};

		getData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const addIngredientHandler = (type) => {
		const oldCount = ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...ingredients,
		};
		updatedIngredients[type] = updatedCount;
		dispatch({
			type: "MODIFY_INGREDIENTS",
			payload: {
				ingredients: updatedIngredients,
			},
		});
	};

	const removeIngredientHandler = (type) => {
		const oldCount = ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...ingredients,
		};
		updatedIngredients[type] = updatedCount;

		dispatch({
			type: "MODIFY_INGREDIENTS",
			payload: {
				ingredients: updatedIngredients,
			},
		});
	};

	const purchaseHandler = () => {
		setShow(true);
		dispatch({ type: "TOGGLE_PURCHASE", payload: true });
	};

	const purchaseCancelHandler = () => {
		setShow(false);
		dispatch({ type: "TOGGLE_PURCHASE", payload: false });
	};

	const purchasable = Object.values(ingredients).reduce(
		(sum, el) => sum + el,
		0
	);

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
					<Burger ingredients={ingredients} />
				</Row>
				<Row className="justify-content-center">
					{error ? (
						<p>Ingredients can't be loaded</p>
					) : (
						<ControlPanel
							ingredientAdded={addIngredientHandler}
							ingredientRemoved={removeIngredientHandler}
							ingredients={ingredients}
							disabled={purchasable}
							purchasable={purchasable}
							ordered={purchaseHandler}
							show={show}
							onClose={purchaseCancelHandler}
						/>
					)}
				</Row>
			</Container>
		</>
	);
};

export default BurgerBuilder;
