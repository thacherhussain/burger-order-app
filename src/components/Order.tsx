import React from "react"
import { Card } from "react-bootstrap"
import { Ingredients } from "common/types"

type Props = {
	ingredients: Ingredients
	name: string
	price: string | number
}

const Order: React.FC<Props> = ({ name, price, ingredients }) => {
	const ingredientsFinal = React.useMemo(() => {
		return Object.entries(ingredients).map(([name, amount]) => ({
			name,
			amount,
		}))
	}, [ingredients])

	const ingredientOutput = ingredientsFinal.map((ig) => {
		return (
			<span key={ig.name}>
				{ig.name} ({ig.amount})
			</span>
		)
	})

	return (
		<Card>
			<Card.Text>
				<p>Customer: {name}</p>
				<p>Ingredients: {ingredientOutput}</p>
				<p>
					Price: <strong>USD ${Number(price).toFixed(2)}</strong>
				</p>
			</Card.Text>
		</Card>
	)
}

export default Order
