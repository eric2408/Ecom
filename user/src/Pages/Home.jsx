import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Popproducts from '../Components/Popproducts'
import Sliders from '../Components/Sliders'
import Subscription from '../Components/Subscription'
import Features from '../Components/Features'
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.product.products);
  // products.pop();
  console.log(products)
  return (
    <div>
        <Announcement />
        <Navbar />
        <Sliders />
        <Features />
        <Categories />
        <Popproducts />
        <Subscription />
        <Footer />
    </div>
  )
}

export default Home