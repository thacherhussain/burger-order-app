import React from "react";

import { ButtonGroup, Button } from "react-bootstrap";

const IngredientButton = (props) => {
	return (
		<div className="d-flex justify-content-center py-2">
			<ButtonGroup>
				<Button onClick={props.removed} disabled={props.disabled}>
					-
				</Button>
				<Button
					variant="outline-primary"
					style={{ minWidth: "120px" }}
					disabled
				>
					{props.label} ({props.value})
				</Button>
				<Button onClick={props.added}>+</Button>
			</ButtonGroup>
		</div>
	);
};

export default IngredientButton;
