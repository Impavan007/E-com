import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import Anouncement from '../../components/anouncement/anouncement'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/categories/categories'
import Products from '../../components/products/products'
import Newsletter from '../../components/newsletter/newsletter'
import Footer from '../../components/footer.jsx/Footer'

export const Home = () => {
  return (
    <div>
      <Anouncement/> 
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      </div>
  )
}
