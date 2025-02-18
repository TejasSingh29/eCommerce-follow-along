import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts, Cart, ProductDetails, Profile} from "./Routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/my-products" element={<MyProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;