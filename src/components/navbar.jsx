import React from 'react'
import { Link } from 'react-router-dom'
import { Bag } from 'phosphor-react';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'



export const Navbar = () => {
    return (
        <div className='navbar'>
         <h2>Pro Vision Mall</h2>
            <div className='links'>
                <Link to='/shop'><Bag size={32} /></Link>
                <Link to='/cart'>
                    <ShoppingCart size={32} />  
                </Link>
        </div>
        </div>

    );
};

export default Navbar;