import React from 'react';
import './Products.css'

const Products = ({productItems}) => {
  return (
    <div className='products'>
   {productItems.map(productItem=>( 
   <div className='card' key={productItem.id}>
    <div>
      <img src={productItem.image} className='image' alt='phone'/>
      <h3>{productItem.name}</h3>
      <p>Price: Rs{productItem.price}</p>
      <button>ADD TO CART</button>
      </div>

   </div>))}
    </div>

  )
}

export default Products