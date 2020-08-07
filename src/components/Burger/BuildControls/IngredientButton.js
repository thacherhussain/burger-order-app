import React from "react";

const IngredientButton = ({ ingredient, value = 0, onClick }) => {
	return (
		<div className="d-flex">
			<button disabled={value === 0} onClick={() => onClick(value - 1)}>
				-
			</button>
			<div className="px-3">
				{ingredient} - {value}
			</div>
			<button onClick={() => onClick(value + 1)}>+</button>
		</div>
	);
};

export default IngredientButton;
