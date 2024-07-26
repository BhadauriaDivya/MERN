import React from 'react'
import { IoIosSend } from "react-icons/io";
import { IconContext } from "react-icons";
 
const Contact = () => {

  return (
    <div className="skills">
      <h1>Contact Us</h1>
      <div className="yellowline"/>
    <form>
    <div className='name-wrap'>
    <input type="text" name="fullname" className="form-input" placeholder="Full name" required="" data-form-input=""/>
    <input type="email" name="email" className="form-input" placeholder="Email address" required="" data-form-input=""/>
    <input type="tel" name="tel" className="form-input" placeholder="Mobile Number" required="" data-form-input=""/>
    <textarea name="message" className="form-input-msg" placeholder="Your Message" required="" data-form-input=""/>
    <button className="form-btn" type="submit" disabled="" data-form-btn="">
        <IconContext.Provider value={{ size: "20px" }}>
          <IoIosSend/>
        </IconContext.Provider>
      Send Message
    </button>
    </div>
    </form>
    </div>
  )
}

export default Contact