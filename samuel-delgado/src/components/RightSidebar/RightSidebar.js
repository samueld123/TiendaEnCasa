import './RightSidebar.css';
import React, { useEffect, useState } from 'react'
import Button from '../Buttons/Button';
import * as BsIcons from "react-icons/bs";
import CartItem from '../CartItem/CartItem';

const RightSidebar = ({cartItems, onDelete}) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0, 
      });

    const [phone, setPhone] = useState('')
    const [avail, setAvail] = useState(false)

    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    return (
        <div className='full-bar'>
            <div className='bar-top'>
                <div className='bar-top-title'>
                    <BsIcons.BsCart3 className='cart'/>
                    <span className='bar-top-cart-text'>Carrito de Compras</span>
                </div>
                <div className='total'>
                    <p className='total-title'>
                        Total
                    </p>
                        
                    {cartItems.length !== 0 && (
                        <p className='total-cash'>
                            {formatter.format(totalPrice)}
                        </p>
                    )} 
                </div>
            </div>
            <div className='bar-mid'>
                <CartItem itemsList={cartItems} onDelete={onDelete}/>
            </div>
            <div className='bar-bottom'>
                <div className='input-number'>
                    <input placeholder='Celular'
                    onChange={(event) => {
                    setPhone(event.target.value);
                    setAvail(phone.length>=5 ? 1:0)
                    }}/>
                </div>
                <Button copy="vender" able={avail}/>
            </div>
        </div>
    )
}

export default RightSidebar