import React from 'react'
import './Style.css'

import { CiLocationOn, CiMail, CiLinkedin } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";


import Me from './Me.png'

const Aside = () => {
  return (
    <div>
        <aside className="sidebar" data-sidebar>
            <div className='info'>
              <figure className='imgg'>
                <img src={Me} width={100} alt="That's Me"/>
              </figure>
              <h1>Divyanshi Bhadauria</h1>
              <div className='box'>Front-End Developer</div>
              <div className="line"></div>
                <ul className='list'>

                  <li className='item'>
                    <div className="icon"><CiMail /></div>
                    <div className="list-data">
                    <p className='list-title'>E-Mail</p>
                    <a className='list-info'>bdivyanshi11.11@gmail.com</a>
                    </div>
                  </li>

                  <li className='item'>
                    <div className="icon"><IoPhonePortraitOutline/></div>
                    <div className="list-data">
                    <p className='list-title'>Phone</p>
                    <a className='list-info'>+91 6386483824</a>
                    </div>

                  </li>

                  <li className='item'>
                    <div className="icon"><CiLocationOn/></div>
                    <div className="list-data">
                    <p className='list-title'>Location</p>
                    <a className='list-info'>Delhi, India</a>
                    </div>

                  </li>

                  <li className='item'>
                    <div className="icon"><CiLinkedin/></div>
                    <div className="list-data">
                    <p className='list-title'>LinkedIn</p>
                    <a href='https://www.linkedin.com/in/divyanshi-bhadauria/' className='list-info'>divyanshi-bhadauria</a>
                    </div>

                  </li>

                  <li className='item'>
                    <div className="icon"><FiGithub/></div>
                    <div className="list-data">
                    <p className='list-title'>GitHub</p>
                    <a href='https://github.com/BhadauriaDivya' className='list-info'>BhadauriaDivya</a>
                    </div>

                  </li>

                </ul>

            </div>
        </aside>
    </div>
  )
}

export default Aside