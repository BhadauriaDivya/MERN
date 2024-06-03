import React from 'react'
import './Style.css'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Card from './Card'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <br/>
    <Card/>
    </div>
  )
}

export default Home