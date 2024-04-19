import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    // <div>
    //     <h1>Navbar</h1>
    //     <Link to="/">Home</Link>
    //     <Link to="/card">Card</Link>
    //     <NavLink to="/counter">Counter</NavLink>
    // </div>

    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="/">
            KIET MCA
        </NavLink>
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/"
              style={({isActive})=>(
                isActive?
                {color:"green", fontWeight:"bold"}
                :{color:"white"})}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/card"
              style={({isActive})=>(
                isActive?
                {color:"green", fontWeight:"bold"}
                :{color:"white"})}>
                Card
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/counter"
              style={({isActive})=>(
                isActive?
                {color:"green", fontWeight:"bold"}
                :{color:"white"})}>
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lang"
              style={({isActive})=>(
                isActive?
                {color:"green", fontWeight:"bold"}
                :{color:"white"})}>
                Language
              </NavLink>
            </li>            
            <li className="nav-item">
              <NavLink className="nav-link" to="/student"
              style={({isActive})=>(
                isActive?
                {color:"green", fontWeight:"bold"}
                :{color:"white"})}>
                Student
              </NavLink>
            </li>            
            <li className="nav-item">
              <NavLink className="nav-link" to="/product"
              style={({isActive})=>(
                isActive?
                {color:"green", fontWeight:"bold"}
                :{color:"white"})}>
                Product
              </NavLink>
            </li>            
            <li className="nav-item">
              <NavLink className="nav-link" to="/about"
              style={({isActive})=>(
                isActive?
                {color:"green", fontWeight:"bold"}
                :{color:"white"})}>
                About Us
              </NavLink>
            </li>            
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
    </nav>
  );
};

export default Navbar;
