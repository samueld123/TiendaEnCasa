import './AddRemove.css';
import React, { useEffect, useState } from 'react'
// import React from 'react'
import * as FaIcons from "react-icons/fa";


const AddRemove = ({product, onAdd, onRemove, quan}) => {
  // let canAdd = amount<product.quantity

  let add = ()=>{
    
    product.quantity+=1;
    
  }
  let substract = ()=>{
    if(product.quantity >0){
      product.quantity=product.quantity-1;
    }
    
  }
  return (
    <div className='add-remove-buttons '>
        <button className={"minus-button minus_clickable"} onClick={()=> {onRemove(product, true); substract();}} ><FaIcons.FaMinus/></button>
        <div className='count-wrapper'>
            <p className='count-number'>{/*product.quantity*/}</p>

        </div>
        {/* <button className={`add-button ${canAdd ? "add_clickable": null } `} onClick={()=> {onAdd(product); add();}}><FaIcons.FaPlus/></button> */}
        <button className='add-button add_clickable' onClick={()=> {onAdd(product); add();}}><FaIcons.FaPlus/></button>
        
    </div>
  )
}

export default AddRemove