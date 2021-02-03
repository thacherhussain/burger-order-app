import React from 'react'
import { getTotalPrice } from 'selectors'

export default function makeStore(reducer, initialState) {
  const globalContext = React.createContext()
  // const dispatchContext = React.createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState)

    return (
      <globalContext.Provider value={{ dispatch, store }}>
        {children}
      </globalContext.Provider>
    )
  }

  function useStore() {
    const { store } = React.useContext(globalContext)
    const calcTotalPrice = getTotalPrice(store.ingredients, store.prices)
    return { ...store, calcTotalPrice }
  }

  function useDispatch() {
    const { dispatch } = React.useContext(globalContext)
    return dispatch
  }

  return [StoreProvider, useStore, useDispatch]
}

// const Provider1 = makeStore(reducer, {});
// const Provider2 = makeStore(reducer, { value: 1 });
