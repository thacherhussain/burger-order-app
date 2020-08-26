import React from 'react';
import { useOrderStore } from "context/orderContext";


const TotalPrice = () => {
    const { calcTotalPrice: totalPrice } = useOrderStore();
    return <span>Total Price: ${totalPrice.toFixed(2)}</span>
};

export default TotalPrice;