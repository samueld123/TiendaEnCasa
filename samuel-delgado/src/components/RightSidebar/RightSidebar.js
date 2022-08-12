import './RightSidebar.css';
import React, { useEffect, useState } from 'react'
import * as BsIcons from "react-icons/bs";
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import * as FaIcons from "react-icons/fa";

const RightSidebar = ({cartItems, onDelete}) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0, 
      });

    const [phone, setPhone] = useState('')
    const [avail, setAvail] = useState(false)

    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

    const [showModal, setShowModal] = useState(false)
    const openCloseModal = ()=>{
        setShowModal(!showModal)
    }
    return (
        <>
        
            <div className='full-bar'>
                <div className='bar-top'>
                    <div className='bar-top-title'>
                        <BsIcons.BsCart3 className='cart'/>
                        <span className='bar-top-cart-text'>Carrito de Compras</span>
                    </div>
                    <div className='total'>
                        <hr className='dashed-total'/>
                        <p className='total-title'>
                            Total
                        </p>
                            
                        {cartItems.length !== 0 && (
                            <p className='total-cash'>
                                {formatter.format(totalPrice)}
                            </p>
                        )} 
                        <hr className='dashed-total-bottom'/>
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
                    <div className={`button ${avail ? "clickable":null}`} onClick={avail ? ()=>openCloseModal():null}>
                        <p className='button-copy'>Vender</p>
                    </div>
                </div>
            </div>

            <Modal show={showModal} changeShow={openCloseModal}>
                <div className="content" onClick={(e)=>
                    e.stopPropagation()
                }>
                    <h2 className='modal-title'>¡Super! Venta Realizada</h2>
                    <FaIcons.FaRegCheckCircle className='modal-check'/>
                    <div className='copy-container'>
                        <p className='modal-copy'>El comprobante de venta se envió al número de WhatsApp del cliente.</p>
                    </div>
                    
                    <div className='ok-button' onClick={()=> setShowModal(false)}>
                        <p className='button-copy'>OK</p>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default RightSidebar