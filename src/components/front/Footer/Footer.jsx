import React from 'react';
import './Footer.css';
import { FacebookLogo } from 'phosphor-react';
import {InstagramLogo} from 'phosphor-react';
import {YoutubeLogo} from 'phosphor-react';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerone'>
        
     <div className='boxone'><div className='line'>USEFUL LINKS</div>
     <p><a href='/'>Home</a></p>
     <p><a href='/product'>Product</a></p>
     <p><a href='/contact'>Contact</a></p>
     <p><a href='/'>Gift Vouchers</a></p>
     </div>
     <div className='boxtwo'><div className='line'>CATEGORIES</div>
     <p>Mobile</p>
     <p>Laptop</p>
     <p>Smart Watch</p>
     <p>TV</p>
     
     </div>
     <div className='boxthree'><div className='line'>LOCATION</div><img src='./images/location.PNG' alt=''/>
     <div className='fblogo'>
     <FacebookLogo size={36} weight="bold"  />
     <InstagramLogo size={36} weight="bold" />
     <YoutubeLogo size={36} weight="bold" />

</div>
      </div>
     </div>
    <div className='copyright'>
      @Copyright Sharmila Electronics  2023-All Right Reserved
    </div>
    </div>
  )
}

export default Footer