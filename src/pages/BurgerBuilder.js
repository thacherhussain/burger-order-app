import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
// import { useHistory } from "react-router-dom";

import axios from "../axios-orders";
import Burger from "components/Burger/Burger";
import ControlPanel from "components/Burger/ControlPanel";
import { useOrderStore, useOrderDispatch } from "context/orderContext";

const BurgerBuilder = () => {
	const { ingredients, error, basePrice, prices, totalPrice } = useOrderStore();
	const dispatch = useOrderDispatch();
	// const history = useHistory(); // TODO: use this
	const [show, setShow] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const [priceResponse, ingredientsResponse] = await Promise.all([
					axios.get(
						"https://burger-generator-cdbeb.firebaseio.com/%22basePrice%22.json"
					),
					axios.get(
						"https://burger-generator-cdbeb.firebaseio.com/%22bigIngredients%22.json"
					),
				]);

				const prices = ingredientsResponse.data.reduce((acc, ingredient) => {
					acc[ingredient.name] = ingredient.cost;
					return acc;
				}, {});

				const ingredients = ingredientsResponse.data.reduce(
					(acc, ingredient) => {
						acc[ingredient.name] = ingredient.defaultValue;
						return acc;
					},
					{}
				);

				dispatch({
					type: "INIT",
					payload: {
						basePrice: priceResponse.data,
						ingredients: ingredients,
						prices: prices,
					},
				});
			} catch (error) {
				dispatch({ type: "ERROR" });
			}
		};

		getData();
	}, []);

	const addIngredientHandler = (type) => {
		const oldCount = ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...ingredients,
		};
		updatedIngredients[type] = updatedCount;

		const updatedTotalPrice =
			basePrice +
			Object.entries(updatedIngredients)
				.map(([key, value]) => {
					return prices[key] * +value;
				})
				.reduce((sum, el) => sum + el, 0);

		dispatch({
			type: "MODIFY_INGREDIENTS",
			payload: {
				ingredients: updatedIngredients,
				totalPrice: updatedTotalPrice,
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

		const updatedTotalPrice =
			basePrice +
			Object.entries(updatedIngredients)
				.map(([key, value]) => {
					return prices[key] * +value;
				})
				.reduce((sum, el) => sum + el, 0);

		dispatch({
			type: "MODIFY_INGREDIENTS",
			payload: {
				ingredients: updatedIngredients,
				totalPrice: updatedTotalPrice,
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
							price={totalPrice}
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
