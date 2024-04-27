import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'

import './component/Style.css'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Home/>
    </>
  )
}

export default App
