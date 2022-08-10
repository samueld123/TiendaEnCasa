import React, { useState } from 'react'
import AddRemove from '../AddRemove/AddRemove';
import Product from '../Product/Product';
import './ProductContainer.css';

const ProductContainer = ({product}) => {
  const [amount, setamount] = useState(0)
  return (
    <div className='product-container'>
        <Product product={product} />
        <AddRemove amount={amount} setamount={setamount} product={product}/>
    </div>
  )
}

export default ProductContainer