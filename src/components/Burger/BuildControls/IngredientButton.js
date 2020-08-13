import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const IngredientButton = ({ ingredient, value = 0, onClick }) => {
	return (
		<div className="d-flex justify-content-center py-2">
			<ButtonGroup>
				<Button onClick={() => onClick(value + 1)}>-</Button>
				<Button disabled>
					{ingredient} ({value})
				</Button>
				<Button onClick={() => onClick(value + 1)}>+</Button>
			</ButtonGroup>
		</div>
	);
};

export default IngredientButton;
