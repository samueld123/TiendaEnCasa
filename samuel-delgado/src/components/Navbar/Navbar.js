import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { SidebarData } from './SidebarData'
import './Navbar.css'
import Button from '../Buttons/Button';

function Navbar() {
    return (
        <>            
        <nav className='nav-menu'>
            <div className='wrapper'>
                <ul className="nav-menu-items">    
                    <li className='menu-bars'>
                        <div className='imgWrapper'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEP7f440ENHQratvIxN32s-i9ORO6IdYbZw&usqp=CAU" alt=''/> 
                            <div className='edit-ball'>
                                
                                <FaIcons.FaPencilAlt className='edit-ball-logo'/>
                                
                                
                            </div>
                        </div>
                        
                    </li>
                    
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                {console.log(item.cName)}
                                    
                                    {item.icon}
                                    <span>{item.title}</span>
                                    
                            </li>
                        )
                    })}
                </ul>
                <div className='buttons'>
                    <Button copy="Cerrar Caja"/>
                    <Button copy="Salir"/>
                </div>
            </div>
        </nav>
            
        </>
    
  )
}

export default Navbar