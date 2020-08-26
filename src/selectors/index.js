
const BASE_PRICE = 4;

export const getTotalPrice = (ingredients, prices) => {
    return Object.entries(ingredients).reduce((acc, [key, value])=> {
        acc += prices[key] * value;
        return acc;
    }, BASE_PRICE);
}