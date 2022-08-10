import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import DownSidebar from './components/DownSidebar/DownSidebar';
import Search from './components/Search/Search';
import RightSidebar from './components/RightSidebar/RightSidebar';
import ProductContainer from './components/ProductContainer/ProductContainer';


function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);

  useEffect(() =>{
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('No se recibió la data esperada.')
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems);
        setFetchError(null)
      } catch (err) {
        setFetchError(err.mesage)
      }
    }

    (async () => await fetchItems())();

  },[])

  return (
    <>
      {/* <Products/> */}
      <Search/>
      <DownSidebar/>
      <Navbar/>
      <RightSidebar/>

      <div className='products'>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
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
