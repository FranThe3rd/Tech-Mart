import React, {createContext, useState}from 'react'
import {PRODUCT_LIST} from '../pages/shop/products.js'



export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCT_LIST.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItem = (newAmount,itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));

    }

    const countTotalItems = (cartItems) => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];
        }
        return totalCount;
    }

    const getTotalPrice = (cartItems) => {
        let totalPrice = 0;
        for (const itemId in cartItems) {
            totalPrice += cartItems[itemId] * PRODUCT_LIST[itemId-1].price;
        }
        return totalPrice;
    }

    const contextValue = {cartItems, addCart, removeFromCart, updateCartItem,countTotalItems,getTotalPrice}
    

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

