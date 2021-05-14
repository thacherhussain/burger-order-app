import React from 'react'
import { useOrders } from 'context/orderContext'
import { getTotalPrice } from 'selectors'

const TotalPrice: React.FC = () => {
	const {
		store: { ingredients, prices },
	} = useOrders()
	// const totalPrice = getTotalPrice(ingredients, prices)
	const totalPrice = 100

	return <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
}

export default TotalPrice
