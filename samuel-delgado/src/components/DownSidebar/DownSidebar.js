import React from 'react'
import './DownSidebar.css';
import TiendaLogo from './tienda-casa.png'

const DownSidebar = () => {
  return (
    <div className='down-sidebar'>
        <img className='shop-logo' src={TiendaLogo} alt=''/> 
    </div>
  )
}

export default DownSidebar