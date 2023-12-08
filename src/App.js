import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import {Frontpage, Homepage, Loginpage, Signup, Products, ProductPage, Admin, Stats} from './pages';





const App = () => {

  return (
    <div>
      
      <BrowserRouter>
      <Routes>

        <Route  index element={<Frontpage/>} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element = {<Loginpage/>} /> 
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:productId" element={<ProductPage/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/products/stats" element={<Stats/>}/>
        
      </Routes> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;
