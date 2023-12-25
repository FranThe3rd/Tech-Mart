import React, { useContext } from 'react';
import './cart-item.css';
import {ShopContext} from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data
    const {cartItems,addCart,removeFromCart,updateCartItem} = useContext(ShopContext);


  return (

    <div className='cart-item'>
        <div className='cart-item-info'>
            <img src={productImage} />
            <p>{productName}</p>
            <b><p className='price'>${price}</p></b>
        </div>
        <div className='cart-item-amount'>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItem((Number(e.target.value)),id) } />
            <button onClick={() => addCart(id)}>+</button>
        </div>
        </div>
  )
}

export default CartItem
