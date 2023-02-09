import React from "react";

import Header from "./components/front/Header/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./components/front/Products/Products";
import data from "./components/back/data";
import Cart from "./components/front/Cart/Cart";
import { useState } from "react";
import Home from "./components/front/Home/Home";
import { Contact } from "./components/front/Contact/Contact";
import Footer from "./components/front/Footer/Footer";
import GoToTop from "./components/front/GoToTop/GoToTop";




function App() {
  const {productItems}=data;
  const[cartItems, setCartItems]=useState([]);

  const handleCartClearance=()=>{
    setCartItems([]);
  }

  const handleAddProduct=(product)=>{
    const ProductExist=cartItems.find((item)=> item.id ===product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=>item.id ===product.id ?
      {...ProductExist, quantity: ProductExist.quantity+1}:item)
      );
    } else{
      setCartItems([...cartItems,{...product,quantity:1}]);

    }

  }

  const handleRemoveProduct=(product)=>{
    const ProductExist=cartItems.find((item)=> item.id ===product.id);
    if(ProductExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id !==product.id ?
      {...ProductExist, quantity: ProductExist.quantity+1}:item)
      );
    } else{
      setCartItems(cartItems.map((item)=>item.id ===product.id?
      {...ProductExist, quantity:ProductExist.quantity-1}:item
      ));

    }

  }

  




  return (
    <div className="App">
    
<BrowserRouter>

<Header cartItems={cartItems}/>
<Routes>
  <Route path='/' exact element ={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>

<Route path='/product'exact element={<Products 
productItems={productItems}
 handleAddProduct={handleAddProduct}
 />}/>
<Route path='/cart' element={<Cart 
       cartItems={cartItems}
      handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}/>}/>

</Routes>
<GoToTop/>
<Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
