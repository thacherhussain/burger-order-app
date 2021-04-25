import { Ingredients, IngredientKeys } from 'common/types';

const BASE_PRICE = 4

type IngredientsMap = [IngredientKeys, number][]

export const getTotalPrice = (ingredients:Ingredients, prices:Ingredients): number => {
	const ingredientsMap = Object.entries(ingredients) as IngredientsMap;
	return ingredientsMap.reduce((acc, [key, value]) => {
		acc += prices[key] * value
		return acc
	}, BASE_PRICE as number)
}
