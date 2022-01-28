import { useState, useEffect } from 'react';
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const localStorageCart = getStoredCart();
            const cartToUse = [];
            for (const key in localStorageCart) {
                const addedProduct = products.find(pd => pd.key === key);
                if (addedProduct) {
                    addedProduct.quantity = localStorageCart[key];
                }
                cartToUse.push(addedProduct);
            }
            setCart(cartToUse);
        }

    }, [products])

    return [cart, setCart];
}

export default useCart;
