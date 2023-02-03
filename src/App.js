import React from "react";

import Header from "./components/front/Header/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./components/front/Products/Products";
import data from "./components/back/data";



function App() {
  const {productItems}=data;
  return (
    <div className="App">
    
<BrowserRouter>

<Header/>
<Routes>

<Route path='/product'exact element={<Products productItems={productItems}/>}/>
</Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
