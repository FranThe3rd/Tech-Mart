import React from 'react'
import './shop.css'
import {PRODUCT_LIST} from './products.js'
import Product from './product.jsx'

// Images
import IphoneIMG from '../../slide-img/iPhone.jpg'
import ComputerIMG from '../../slide-img/computer.jpg'
import VrIMG from '../../slide-img/vr.jpg'
import HeadphonesIMG from '../../slide-img/headphones.jpg'



//
export const Shop = () => {
  const scrollToProducts = () => {
    const productsEl = document.getElementsByClassName('products')[0];
    productsEl.scrollIntoView({  
      behavior: 'smooth',
      inline: 'start' 
    });
  };

  return (
    <div className='shop'>
      <div className='shop-title'>
            <h1>Shop</h1>
        </div>
      <div className='container'>
        <div className='wrapper'>
          <img src={IphoneIMG}></img>
          <img src={ComputerIMG}></img>
          <img src={VrIMG}></img>
          <img src={HeadphonesIMG}></img>
        </div>
      </div>
        <button className='shopBttn' onClick={scrollToProducts}>Shop</button>
        <div className='products'>
            {PRODUCT_LIST.map((product) => (
                 <Product data={product} />
            ))}
        </div>    
    </div>

  )
}

export default Shop
