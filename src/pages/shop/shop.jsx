import React from 'react'
import './shop.css'
import {PRODUCT_LIST} from './products.js'
import Product from './product.jsx'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop-title'>
            <h1>Shop</h1>
        </div>
        <div className='products'>
            {PRODUCT_LIST.map((product) => (
                 <Product data={product} />
            ))}
        </div>    
    </div>

  )
}

export default Shop
