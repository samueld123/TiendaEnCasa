import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Ventas',
        path: '/ventas',
        icon: <FaIcons.FaShoppingBasket />,
        cName: 'nav-text'
    },
    {
        title: 'Compras',
        path: '/compras',
        icon: <FaIcons.FaClipboardList />,
        cName: 'nav-text'
    },
    {
        title: 'Caja',
        path: '/caja',
        icon: <FaIcons.FaCashRegister />,
        cName: 'nav-text'
    },
    {
        title: 'Inventarios',
        path: '/inventario',
        icon: <FaIcons.FaBoxes />,
        cName: 'nav-text'
    },
    {
        title: 'Productos',
        path: '/productos',
        icon: <FaIcons.FaTag />,
        cName: 'nav-text'
    },
    {
        title: 'Reportes',
        path: '/reportes',
        icon: <FaIcons.FaRegFile />,
        cName: 'nav-text'
    }
]
