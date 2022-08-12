import React from 'react'
import './Header.css';
import * as FaIcons from "react-icons/fa";

const Header = ({title}) => {
  return (
    
    <div className='header'>
      <FaIcons.FaChevronLeft className='back'/>
      <h1>{title}</h1>
      <hr className='dashed-title'/>
    </div>
  )
}

export default Header