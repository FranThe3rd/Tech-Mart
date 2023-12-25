import React, { useContext } from 'react';
import {PRODUCT_LIST} from '../shop/products.js';
import {ShopContext} from '../../context/shop-context';
import CartItem from './cart-item.jsx';
import { useNavigate } from 'react-router-dom';


export const Cart = () => {

   const navigate = useNavigate();

  const {cartItems} = useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
      <h1>Cart</h1>
      </div>
      <div className='cartItems'>
        {PRODUCT_LIST.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem data={product} /> 
            )
            }}
       )}
      </div>

      <div className='checkout'>
        <p>Total: $0</p>
        <button className='checkoutBT'>Checkout</button>
        <p></p>
        <button className='continue' onClick={() => navigate("/")}>Continue Shopping</button>

      </div>
    </div>
  )
}

export default Cart