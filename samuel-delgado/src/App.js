import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import DownSidebar from './components/DownSidebar/DownSidebar';

function App() {
  return (
    <>
    <div className='fondo'>
      <Router>
        <Header/>
        <Navbar/>
        {/* <DownSidebar/> */}

        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div>
    
      
    </>
  );
}

export default App;
