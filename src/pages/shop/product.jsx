import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context';


export const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    const {addCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    return (
        <div className='product'>
            <div className='productInfo'>
            <img src={productImage} />
            <p><b>{productName}</b></p>
            <p>${price}</p> 
            <button className='addToCartBttn' onClick={() => addCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>         
            </div>
            
            
        </div>
    )
}

export default Product;
