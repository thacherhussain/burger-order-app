export type IngredientKeys = "bacon" | "cheese" | "meat" | "salad"
export type Ingredients = Record<IngredientKeys, number>

export type Customer = {
    address: {
        street: string
        zipcode: string
    }
    customerId: string
    email: string
    name: string
}

export type DeliveryMethods = "fast" | "Standard" | "FedEx" | "Owl" | "Slow" 
export type Order = {
    orderId: string
    price: number
    ingredients: Ingredients
    deliveryMethod: DeliveryMethods
    customer: Customer
}