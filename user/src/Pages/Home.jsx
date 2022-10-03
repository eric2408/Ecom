import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProductList from '../Components/ProductList'
import Sliders from '../Components/Sliders'
import Subscription from '../Components/Subscription'


function Home() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Sliders />
        <Categories />
        <ProductList />
        <Subscription />
        <Footer />
    </div>
  )
}

export default Home