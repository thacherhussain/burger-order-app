import makeStore from "./store";

const initialState = {
	ingredients: {},
	purchasing: false,
	loading: false,
	error: false,
    prices: {},
};

const reducer = (state, action) => {
	// TODO: LOOK INTO IMMER
	switch (action.type) {
		case "MODIFY_INGREDIENTS":
			return { 
				...state, 
				ingredients: action.payload.ingredients,
			 };
		case "TOGGLE_PURCHASE":
			return {
				...state,
				purchasing:
					action.payload !== undefined ? action.payload : !state.purchasing,
			};
		case "INIT":
			return {
				...state,
				ingredients: action.payload.ingredients,
				prices: action.payload.prices,
			};
		case "ERROR":
			return { ...state, error: true };
		default:
			throw new Error("unhandled action type");
	}
};

const [OrderProvider, useOrderStore, useOrderDispatch] = makeStore(
	reducer,
	initialState
);

export { OrderProvider, useOrderStore, useOrderDispatch };
