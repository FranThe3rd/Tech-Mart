import React from 'react'

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    return (
        <div className='product'>
            <div className='productInfo'>
            <img src={productImage} />
            <p><b>{productName}</b></p>
            <p>${price}</p> 
            <button className='addToCartBttn'>Add To Cart</button>         
            </div>
            
            
        </div>
    )
}

export default Product;
