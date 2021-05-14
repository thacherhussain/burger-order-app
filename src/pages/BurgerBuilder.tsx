import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import axios from '../axios-orders'
import Burger from 'components/Burger/Burger'
import ControlPanel from 'components/Burger/ControlPanel'
import { useOrders } from 'context/orderContext'
import { IngredientKeys } from 'common/types'

type BigIngredient = {
	cost: number
	defaultValue: number
	name: string
}

const BurgerBuilder: React.FC = () => {
	const { dispatch, store } = useOrders()
	const { ingredients, error } = store
	const [show, setShow] = useState(false)

	useEffect(() => {
		const getData = async () => {
			try {
				const [response] = await Promise.all([
					axios.get<BigIngredient[]>('%22bigIngredients%22.json'),
				])

				const prices = response.data.reduce((acc, ingredient) => {
					acc[ingredient.name] = ingredient.cost
					return acc
				}, {} as Record<string, number>)

				const ingredients = response.data.reduce((acc, ingredient) => {
					acc[ingredient.name] = ingredient.defaultValue
					return acc
				}, {} as Record<string, number>)

				dispatch({
					type: 'INIT',
					payload: {
						ingredients: ingredients,
						prices: prices,
					},
				})
			} catch (error) {
				dispatch({ type: 'ERROR', payload: undefined })
			}
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const addIngredientHandler = (type: IngredientKeys) => {
		if (!ingredients) return

		const oldCount = ingredients[type]
		const updatedCount = oldCount + 1
		const updatedIngredients = {
			...ingredients,
		}
		updatedIngredients[type] = updatedCount
		dispatch({
			type: 'MODIFY_INGREDIENTS',
			payload: {
				ingredients: updatedIngredients,
			},
		})
	}

	const removeIngredientHandler = (type: IngredientKeys) => {
		if (!ingredients) return

		const oldCount = ingredients[type]
		if (oldCount <= 0) {
			return
		}
		const updatedCount = oldCount - 1
		const updatedIngredients = {
			...ingredients,
		}
		updatedIngredients[type] = updatedCount

		dispatch({
			type: 'MODIFY_INGREDIENTS',
			payload: {
				ingredients: updatedIngredients,
			},
		})
	}

	const purchaseHandler = () => {
		setShow(true)
		dispatch({ type: 'TOGGLE_PURCHASE', payload: true })
	}

	const purchaseCancelHandler = () => {
		setShow(false)
		dispatch({ type: 'TOGGLE_PURCHASE', payload: false })
	}

	const purchasable = Object.values(ingredients ?? {}).reduce(
		(sum, el) => sum + el,
		0
	)

	if (!ingredients) return null

	return (
		<>
			<Helmet>
				<title>Build a Burger | Good Burger</title>
			</Helmet>
			<Container fluid>
				<Row>
					<Col md={10} sm={10} className='justify-content-center'>
						<h1>Burger Builder</h1>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Burger ingredients={ingredients} />
				</Row>
				<Row className='justify-content-center'>
					{error ? (
						<p>Ingredients can't be loaded</p>
					) : (
						<ControlPanel
							ingredientAdded={addIngredientHandler}
							ingredientRemoved={removeIngredientHandler}
							ingredients={ingredients}
							disabled={purchasable}
							purchasable={purchasable}
							ordered={purchaseHandler}
							show={show}
							onClose={purchaseCancelHandler}
						/>
					)}
				</Row>
			</Container>
		</>
	)
}

export default BurgerBuilder
