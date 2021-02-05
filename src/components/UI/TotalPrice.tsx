import React from "react"
import { useOrderStore } from "context/orderContext"

const TotalPrice: React.FC = () => {
	const { calcTotalPrice: totalPrice } = useOrderStore()
	return <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
}

export default TotalPrice
