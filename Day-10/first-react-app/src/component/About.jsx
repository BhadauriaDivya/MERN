import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate=useNavigate();
    const goRoute = () => {
        navigate("/");
    }
    // const goRoute = () => {
    //     <Link to="/">Home</Link>
    // }
  return (
    <div>
        <h1>This is an example of React router dom</h1>
        <button className="btn btn-success" onClick={goRoute}>Home</button>
    </div>
  )
}

export default About