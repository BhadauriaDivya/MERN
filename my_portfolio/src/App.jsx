import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar1 from './Component/Navbar1'
import './App.css'
import Main from './Component/Main'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar1/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
