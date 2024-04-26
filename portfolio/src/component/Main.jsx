import React from 'react'
import './Style.css'

const Main = () => {
  return (
   <div className="main">
    <nav className="navbar">
    <ul className='nav-list'>
      <li>About</li>
      <li>Portfolio</li>
      <li>Project</li>
      <li>Skills</li>
      <li>Contact</li>
    </ul>
    </nav>
    <div className="about">
      <h1>About Us</h1>
      <div className="yellowline"/>
      <p>
      I'm Front-End Developer and UI/UX Designer from Delhi, India, studing in KIET Group Of Institution.
      I enjoy turning complex problems into simple, beautiful and intuitive designs.
      <br/><br/>
      My job is to build your website so that it is functional and user-friendly but at the same time attractive.
      Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.
      My aim is to bring across your message and identity in the most creative way.
      I would like to creat websites and web design for many brand companies.
      </p>

    </div>
   </div>
  )
}

export default Main