import React, { useState } from 'react'
import AddRemove from '../AddRemove/AddRemove';
import Product from '../Product/Product';
import './ProductContainer.css';

const ProductContainer = ({product, onAdd, onRemove, quan}) => {
  const [amount, setamount] = useState(0)
  return (
    <div className='product-container'>
        <Product product={product}/>
        {console.log(product.qty)}
        <AddRemove amount={amount} setamount={setamount} product={product} onAdd={onAdd} onRemove={onRemove} quan={quan}/>
    </div>
  )
}

export default ProductContainer