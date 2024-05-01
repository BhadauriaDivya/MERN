import React from 'react'
import { IoBookOutline } from "react-icons/io5";

const Resume = () => {
  return (
    <div className="resume">
    <h1>Resume</h1>
    <div className="yellowline"/>
    <div className="edu">
    <div className="title-wrap">
        <div className="icon-book"><IoBookOutline/></div>
        <h2>Education</h2>
    </div>
    <ol className='edu-list'>
        <li className='edu-item'>
            <div className="edu-line"/>
            <div className="edu-circle"/>
            <h3>KIET Group Of Institute</h3>
            <span>2023- Expected graduation 2025</span>
            <p>
                Master of Computer Application<br/> (MCA)
              </p>
        </li>
        <li>
        <div className="edu-circle1"/>
            <h3>Swami Sukhdevanand College</h3>
            <span>2020-2023</span>
            <p>
              Bachelor of Science, Mathematics (BSc Mathematics)<br/>
              Percentage - 61.85%
              </p>
        </li>
        <li>
        <div className="edu-circle2"/>
            <h3>Ryan International School</h3>
            <span>2019-2020</span>
            <p>
                High School<br/>
                Percentage - 74.2%
              </p>
        </li>
    </ol>
    </div>
    </div>
  )
}

export default Resume