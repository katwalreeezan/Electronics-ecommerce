import React from 'react';
import './Home.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Home = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
      };
  return (
    <div className='homes'>
        <div className='imgbox'>
            <div className='leftside'>
            <div className='heading'>
              
           Electronics Products <br/> Up To<span className='color'> 20% </span>Off
        </div>
        
           <p>We are delighted to offer our customers discount on all our Electronic Appliances. Don’t miss out this opportunity and grab your favorite item.</p>
           <a href='/product' className='shopnow'>Shop Now</a>
           </div>
           <div className='rightside'>
            <img  src="./images/electronics.png" alt=""/>
           </div>
        </div>
        <Carousel className='scroll'responsive ={responsive}>
  <div><img src="./images/1.png" alt=""/></div>
  <div><img src="./images/3.png" alt=""/></div>
  <div><img src="./images/6.png" alt=""/></div>
  <div><img src="./images/4.png" alt=""/></div>
  <div><img src="./images/4.png" alt=""/></div>
</Carousel>
    </div>
  )
}

export default Home