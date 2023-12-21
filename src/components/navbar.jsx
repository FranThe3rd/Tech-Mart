import React from 'react'
import { Link } from 'react-router-dom'
import { Bag } from 'phosphor-react';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'



export const Navbar = () => {
    return (
        <div className='navbar'>
         <h2>TechMart</h2>
            <div className='links'>
                <Link to='/'><Bag className='bag' size={32} /></Link>
                <Link to='/cart'>
                    <ShoppingCart className='cart' size={32} />  
                </Link>
        </div>
        </div>

    );
};

export default Navbar;