import { useState } from 'react'
import Navbar from './component/Navbar'
import './App.css'
// import Home from './component/Home'
// import Product from './component/Product'
import MyProduct from './component/MyProduct'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <MyProduct/>
    </>
  )
}

export default App