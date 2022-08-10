import React from 'react'
import AddRemove from '../AddRemove/AddRemove';
import Product from '../Product/Product';
import './ProductContainer.css';

const ProductContainer = () => {
  return (
    <div className='product-container'>
        <Product/>
        <AddRemove/>
    </div>
  )
}

export default ProductContainer