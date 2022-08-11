import './Product.css';
import React from 'react'

import './Product.css';
const DEFAULT_URL = 'https://cdn.shopify.com/s/files/1/0252/0481/7968/products/atun_van_camps_lomitos_aceite-129623-1554309931_800x.png?v=1595867216'
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