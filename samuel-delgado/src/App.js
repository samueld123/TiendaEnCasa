import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import DownSidebar from './components/DownSidebar/DownSidebar';
import Search from './components/Search/Search';
import RightSidebar from './components/RightSidebar/RightSidebar';
import ProductContainer from './components/ProductContainer/ProductContainer';
import DataFetching from './components/DataFetching/DataFetching';
import axios from 'axios';
import AddRemove from './components/AddRemove/AddRemove';
import * as FaIcons from "react-icons/fa";


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const onAdd = (item) =>{
    const exist = cartItems.find(x => x.id === item.id);
    if(exist){
      setCartItems(
        cartItems.map(x => 
          x.id === item.id  ? {...exist, qty: exist.qty +1} : x)
          
        )
    } else {
      setCartItems([...cartItems, {...item, qty: 1}])

    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1  }: x
        )
        
      );
    }
    
    
  };

  const onDelete = (item) => {
    setCartItems(cartItems.filter((x) => x.id !== item.id));
    item.quantity=0;
  }

  useEffect(()=>{
      axios.get('http://localhost:3500/items')
          .then(res => {
              console.log(res)
              setItems(res.data)
          })
          .catch(err=>{
              console.log(err)
          })
  }, [])

  return (
    <>
      {/* <Products/> */}
      {/* <DataFetching/> */}
      {/* <Search/> */}
      <Header/>
      <div className='bar-container'>
        <div className='bar-search'>
          <input placeholder='Buscar Producto' 
            onChange={(event) => {
            setSearchTerm(event.target.value);
            }}/>
          <span><FaIcons.FaSearch/></span>  
        </div>
      </div>
      <DownSidebar/>
      <Navbar/>
      <RightSidebar cartItems={cartItems} onDelete={onDelete}/>
        
        {/* onRemove={onRemove} */}

      <div className='products'>  
        {
          items.filter((item)=>{
            if (searchTerm == ""){
              return item
            } else if (item.product.toLowerCase().includes(searchTerm.toLowerCase())){
              return item
            }
          }).map((item)=>(
            <ProductContainer key ={item.id} product={item} onAdd={onAdd} onRemove={onRemove}></ProductContainer>
          ))
          // items.map((item)=>(
          //   <ProductContainer key ={item.id} product={item} onAdd={onAdd} onRemove={onRemove}></ProductContainer>
          // ))
        }
      </div>

      {/* <main>
        <Content
          items={items.filter}
      </main> */}
      
      {/* <Router> */}
        {/* <Header/>
        <Navbar/> */}
        {/* <DownSidebar/> */}

        {/* <Routes> */}
          {/* <Route path='/' />
        </Routes>
      </Router> */}
    
      
    </>
  );
}

export default App;
