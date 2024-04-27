import React from 'react'
import './Style.css'
import About from './About'
import { Outlet,NavLink, Route, Routes, BrowserRouter } from 'react-router-dom'
import Skills from './Skills'

const Main = () => {
  return (

    <>
   <div className="main">
    <nav className="navbar">
    <ul className='nav-list'>
      <li>
          <NavLink to="/">
                    About
          </NavLink>
      </li>
      <li>
          <NavLink to="/">
            Portfolio
          </NavLink>
      </li>
      <li>
          <NavLink to="/">
            Project
          </NavLink>
      </li>
      <li>
          <NavLink to="/skills">
          Skills
          </NavLink>
      </li>
      <li>
          <NavLink to="/">
            Contact
          </NavLink>
      </li>
    </ul>
    </nav>
    <Routes>
        <Route path="/" element={<About/>} />
    </Routes>
    <Routes>
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    <Outlet/>
    </div>
    </>
  )
}

export default Main