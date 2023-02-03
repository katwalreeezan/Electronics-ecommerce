import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1><Link to ='/home' className='logo'>Sharmila Electronics</Link></h1>
        <Link to='/home'className='home'>Home</Link>
        <Link to='/product' className='product'>Product</Link>
        <Link to='/contact' className='contact'>Contact</Link>
        <Link to='/cart' className='cart'><ShoppingCart size={36} weight="bold" />
</Link>

    </div>
  )
}

export default Header