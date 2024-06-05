import React from 'react'
import './Style.css'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Card from './Card'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <br/>
    <Card/>
    <br/>
    <Footer/>
    </div>
  )
}

export default Home