import './AddRemove.css';
import React from 'react'
import * as FaIcons from "react-icons/fa";

const AddRemove = () => {
  return (
    <div className='add-remove-buttons'>
        <button className='op-button'><FaIcons.FaMinus/></button>
        <div className='count-wrapper'>
            <p className='count-number'>2</p>
        </div>
        <button className='op-button'><FaIcons.FaPlus/></button>
        
    </div>
  )
}

export default AddRemove