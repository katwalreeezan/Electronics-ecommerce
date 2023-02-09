import React from 'react';
import './Products.css'

const Products = ({productItems, handleAddProduct}) => {
  return (
    <div className='products'>
   {productItems.map(productItem=>( 
   <div className='card' key={productItem.id}>
    <div>
      <img src={productItem.image} className='image' alt='phone'/>
      <h3>{productItem.name}</h3>
      <p>Price: Rs{productItem.price}</p>
      <button className='btn' onClick={()=>handleAddProduct(productItem)}>ADD TO CART</button>
      </div>

   </div>))}
    </div>

  )
}

export default Products