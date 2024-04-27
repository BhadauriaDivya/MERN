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
            <span>2023-2025</span>
            <p>
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>
        </li>

        <li>
        <div className="edu-circle1"/>

            <h3>Swami Sukhdevanand College</h3>
            <span>2020-2023</span>
            <p>
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>
        </li>

        <li>
        <div className="edu-circle2"/>

            <h3>Ryan International School</h3>
            <span>2016-2020</span>
            <p>
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>
        </li>

    </ol>
    </div>
    </div>
  )
}

export default Resume