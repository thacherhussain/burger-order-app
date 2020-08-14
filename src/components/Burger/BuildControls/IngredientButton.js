import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const IngredientButton = ({ ingredient, value = 0, onClick }) => {

	const [hasIngredient, setHasIngredient] = useState(false);
	
	useEffect(() => {
		if ( value === 0) {
			setHasIngredient(false);
		} else {
			setHasIngredient(true);
		}
	}, [value]);

	return (
		<div className="d-flex justify-content-center py-2">
			<ButtonGroup>
				<Button onClick={() => onClick(value - 1)} disabled={!hasIngredient}>-</Button>
				<Button disabled>
					{ingredient} ({value})
				</Button>
				<Button onClick={() => onClick(value + 1)}>+</Button>
			</ButtonGroup>
		</div>
	);
};

export default IngredientButton;
