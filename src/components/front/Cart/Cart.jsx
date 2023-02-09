import React from 'react';
import './Cart.css'


const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearannce}) => {

const totalPrice=cartItems.reduce((price,item)=>price +item.quantity*item.price,0);



  return (
    <div className='items'>
   <div className='headerlist'>Cart Items</div>
   <div className='clearcart'>
    {cartItems.length>=1 &&(
      <button classname='clear cart' onClick={handleCartClearannce}>Clear Cart</button>
    )}
   </div>
   {cartItems.length===0 && (<div><h3>No Items added</h3></div>)}
   
    {cartItems.map((item)=>(<div key={item.id} className='list'>
      <img src={item.image} alt=''/>
      <div className='name'><h3>{item.name}</h3></div>
      <div className='function'>

        <button className='add' >+</button>
        <button className='remove' >-</button>
      </div>
      
      <div className='prices'>{item.quantity}× Rs{item.price}</div>
    </div>))}
   
<div className='totalprice'>Total Price
<div className='carttotalprice'>Rs:{totalPrice}</div>
</div>

    </div>
  )
}

export default Cart