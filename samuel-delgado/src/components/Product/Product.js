import './Product.css';
import React from 'react'

import './Product.css';

const Product = ({product}, price) => {
let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0, 
});
  return (
    <div className='product-wrapper'>
        <img className='product-img' src={product.img_url} alt='' />
        <p className='product-name'>{product.product}</p>
        <p className='product-price'>{formatter.format(product.price)}</p>
    </div>
    
  )
}

export default Product