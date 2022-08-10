import './RightSidebar.css';
import React from 'react'
import Button from '../Buttons/Button';
import * as BsIcons from "react-icons/bs";

const RightSidebar = () => {
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
                <p className='total-cash'>
                    $0
                </p>
            </div>
        </div>
        <div className='bar-mid'>

        </div>
        <div className='bar-bottom'>
            <div className='input-number'>
                <input placeholder='Celular'/>
            </div>
            <Button copy="vender"/>
        </div>
    </div>
  )
}

export default RightSidebar