import './AddRemove.css';
import React from 'react'
import * as FaIcons from "react-icons/fa";

const AddRemove = ({amount,setamount, product}) => {
  let canAdd = amount<product.quantity
  let canSubstract = amount>0 
  let add = ()=>{
    if(amount==product.quantity){
      amount=product.quantity
    }
    else{
      setamount(amount+1)
    }
  }
  let substract = ()=>{
    if(amount >0){
      setamount(amount-1)
    }
    
  }
  return (
    <div className='add-remove-buttons '>
        <button className={`minus-button ${canSubstract ? "minus_clickable": null } `} onClick={substract} ><FaIcons.FaMinus/></button>
        <div className='count-wrapper'>
            <p className='count-number'>{amount}</p>
        </div>
        <button className={`add-button ${canAdd ? "add_clickable": null } `} onClick={add}><FaIcons.FaPlus/></button>
        
    </div>
  )
}

export default AddRemove