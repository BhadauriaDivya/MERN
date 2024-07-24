import React from 'react'
import './Style.css'
import About from './About'
import { Outlet,NavLink, Route, Routes, BrowserRouter } from 'react-router-dom'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Resume from './Resume'

const Main = () => {
  return (
    <>
   <div className="main">
    <nav className="navbarr">
    <ul className='nav-list'>

      <li>
          <NavLink to="/">
            About
          </NavLink>
      </li>

      <li>
          <NavLink to="/resume">
            Resume
          </NavLink>
      </li>

      <li>
          <NavLink to="/project">
            Project
          </NavLink>
      </li>

      <li>
          <NavLink to="/skills">
          Skills
          </NavLink>
      </li>

      <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
      </li>
      
    </ul>
    </nav>
    <Routes>
        <Route path="/" element={<About/>} />
    </Routes>
    <Routes>
        <Route path="/resume" element={<Resume/>} />
    </Routes>
    <Routes>
        <Route path="/project" element={<Project/>} />
    </Routes>
    <Routes>
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    <Routes>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Outlet/>
    </div>
    </>
  )
}

export default Main