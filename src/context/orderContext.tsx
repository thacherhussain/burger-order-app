import React from 'react'
import { getTotalPrice } from 'selectors'
import { Ingredients } from 'common/types'

type UninitalizedState = {
	ingredients?: undefined
	purchasing: boolean
	loading: boolean
	error: boolean
	prices?: undefined
}

type InitalizedState = Omit<UninitalizedState, 'ingredients' | 'prices'> & {
	ingredients: Ingredients
	prices: Ingredients
}

type RootState = InitalizedState | UninitalizedState

const initialState: RootState = {
	ingredients: undefined,
	purchasing: false,
	loading: false,
	error: false,
	prices: undefined,
}

type OrderContextL = {
	store: RootState
	dispatch: React.Dispatch<ReducerActions>
}

const OrderContext = React.createContext<OrderContextL>({
	store: initialState,
	dispatch: () => undefined,
})

const OrderProvider: React.FC = ({ children }) => {
	const [store, dispatch] = React.useReducer(reducer, initialState)
	return (
		<OrderContext.Provider value={{ store, dispatch }}>
			{children}
		</OrderContext.Provider>
	)
}

const useOrders = () => {
	const { store, dispatch } = React.useContext(OrderContext)

	return { store, dispatch }
}

const reducer = (state: RootState, action: ReducerActions) => {
	// TODO: LOOK INTO IMMER
	switch (action.type) {
		case 'MODIFY_INGREDIENTS':
			return {
				...state,
				ingredients: action.payload.ingredients,
			}
		case 'TOGGLE_PURCHASE':
			return {
				...state,
				purchasing:
					action.payload !== undefined ? action.payload : !state.purchasing,
			}
		case 'INIT':
			return {
				...state,
				ingredients: action.payload.ingredients,
				prices: action.payload.prices,
			}
		case 'ERROR':
			return { ...state, error: true }
		default:
			throw new Error('unhandled action type')
	}
}

type ActionType<T, P = undefined> = {
	payload: P
	type: T
}

type ReducerActions =
	| ActionType<'MODIFY_INGREDIENTS', { ingredients: any }>
	| ActionType<'TOGGLE_PURCHASE', boolean | undefined>
	| ActionType<'INIT', { ingredients: any; prices: any }>
	| ActionType<'ERROR'>
export { OrderProvider, useOrders }
