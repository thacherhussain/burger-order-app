import React from "react";
import { getTotalPrice  } from 'selectors';

export default function makeStore(reducer, initialState) {
	const storeContext = React.createContext();
	const dispatchContext = React.createContext();

	const StoreProvider = ({ children }) => {
		const [store, dispatch] = React.useReducer(reducer, initialState);

		return (
			<dispatchContext.Provider value={dispatch}>
				<storeContext.Provider value={store}>{children}</storeContext.Provider>
			</dispatchContext.Provider>
		);

		return (
			<storeContext.Provider value={{ dispatch, store }}>
				{children}
			</storeContext.Provider>
		)
	};

	function useStore() {
		const ctx = React.useContext(storeContext);
		const calcTotalPrice = getTotalPrice(ctx.ingredients, ctx.prices);
		return {...ctx, calcTotalPrice}

		const { store } = React.useContext(storeContext);
		return store;
	}

	function useDispatch() {
		return React.useContext(dispatchContext);

		const { dispatch } = React.useContext(storeContext);
		return dispatch;
	}

	return [StoreProvider, useStore, useDispatch];
}
