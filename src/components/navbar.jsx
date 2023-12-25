import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Bag } from 'phosphor-react';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'
import {ShopContext} from '../context/shop-context.jsx';




export const Navbar = () => {
    const {cartItems,countTotalItems} = useContext(ShopContext);
    const totalItems = countTotalItems(cartItems);

    return (
        <div className='navbar'>
         <h2>TechMart</h2>
            <div className='links'>
                <Link to='/'><Bag className='bag' size={32} /></Link>
                <Link to='/cart'>
                    <ShoppingCart className='cart' size={32} />  
                </Link>
                {totalItems > 0 && (
                    <div className='cartItemsNav'>
                        {totalItems}
                    </div>
                )}
                

            </div>
        </div>
    );
};

export default Navbar;