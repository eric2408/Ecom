import React from 'react';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Success from './Pages/Success';
import HomeAd from './AdminPages/HomeAd'
import {Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products/:category" element={<Products />} />
      <Route exact path="/product/:id" element={<ProductDetail />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/login"  element={user ? <Navigate replace to={"/"} /> : <Login />}/>
      <Route exact path="/register" element={user ? <Navigate replace to={"/"} /> : <Register />}/>
      <Route exact path="/success" element={<Success />} />
      <Route exact path="/admin" element={<HomeAd />} />
    </Routes>

  );
}


export default App;
