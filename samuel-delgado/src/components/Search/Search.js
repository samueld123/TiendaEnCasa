import React from 'react'
import './Search.css';
import * as FaIcons from "react-icons/fa";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Search = () => {
  return (
    <>
        <div className='fondo'>
            <Header/>
            <div className='bar-container'>
                <div className='bar-search'>
                    <input placeholder='Buscar Producto'/>
                    <span><FaIcons.FaSearch/></span>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Search