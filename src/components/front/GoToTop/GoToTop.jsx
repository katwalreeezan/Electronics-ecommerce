import React from 'react';
import './GoToTop.css';
import { ArrowUp } from 'phosphor-react';


const GoToTop = () => {
   const goToBtn=()=>{
    window.scrollTo({top:0, left:0, behavior:"smooth"})
   };

  return (
    <div className='top' onClick={goToBtn}><div className='right'>
      <ArrowUp size={36} weight="bold" /></div>
    </div>
  )
}

export default GoToTop