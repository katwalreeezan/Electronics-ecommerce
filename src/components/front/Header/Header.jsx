import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Header.css'

const Header = ({cartItems}) => {
  return (
    <div className='header'>
      <div className='headerside'>
        <h1><Link to ='/' className='logo'>Sharmila Electronics</Link></h1>
        <Link to='/'className='home'>Home</Link>
        <Link to='/product' className='product'>Product</Link>
        <Link to='/contact' className='contact'>Contact</Link>
        <Link to='/cart' className='cart'><ShoppingCart size={36} weight="bold"  />
        <span className='cartlength'>{cartItems.length===0 ?"":cartItems.length}</span>
</Link>
</div>

    </div>
  )
}

export default Header