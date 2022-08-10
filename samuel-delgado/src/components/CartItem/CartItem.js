import './CartItem.css';

import React from 'react'
import * as FaIcons from "react-icons/fa";

const CartItem = () => {
  return (
    <div className='cart-item'>
        <div className='cart-item-texts'>
            <p className='cart-item-title'>Abc</p>
            <p className='cart-item-numbers'> 12000 x2</p>
        </div>
        <div className='cart-item-cancel'>
            <FaIcons.FaTrashAlt />
        </div>
    </div>
    
  )
}

export default CartItem