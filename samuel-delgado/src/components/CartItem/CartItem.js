import './CartItem.css';

import React from 'react'
import * as FaIcons from "react-icons/fa";

const CartItem = ({itemsList, onDelete}) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, 
  });
  return (
    <>    
      {itemsList.map((item) => (
        <div className='cart-item'>
          <div className='cart-item-texts'>
            <p className='cart-item-title'>{item.product}</p>
            <p className='cart-item-numbers'>{`${formatter.format(item.price)} x${item.qty}`}</p>
          </div>
          <div className='cart-item-cancel' onClick={()=> {onDelete(item)}}>
            <FaIcons.FaTrashAlt/>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartItem