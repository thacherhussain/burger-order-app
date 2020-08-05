import React from "react";
import { Card } from "react-bootstrap";

const order = (props) => {
	const ingredients = [];

	for (let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName],
		});
	}

	const ingredientOutput = ingredients.map((ig) => {
		return (
			<span key={ig.name}>
				{ig.name} ({ig.amount})
			</span>
		);
	});

	return (
		<Card>
			<Card.Text>
				<p>Customer: {props.name}</p>
				<p>Ingredients: {ingredientOutput}</p>
				<p>
					Price:{" "}
					<strong>USD ${Number.parseFloat(props.price).toFixed(2)}</strong>
				</p>
			</Card.Text>
		</Card>
	);
};

export default order;
