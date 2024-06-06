import React from 'react'
import logo from './logo.png'

const Navbar = () => {
  return (
  <div className='w-100'>
  <div>
  <nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark" id="fcolor">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={logo} className="imgpho" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav col-10 text-center">
        <li className="nav-item col-3">
          <a className="nav-link" href="#"><i className="bi bi-geo-alt"/>Deliver to Your Address</a>
        </li>
        <li className="nav-item col-5">
        <form className="d-flex" role="search">
        <input className="form-control rounded-0 rounded-start" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-warning rounded-0 rounded-end" type="submit"><i className="bi bi-search"/></button>
      </form>
        </li>
        <li className="nav-item col-1">
          <a className="nav-link" href="#">EN</a>
        </li>
        <li className="nav-item col-2">
          <a className="nav-link" href="#">Hello User</a>
        </li>
        <li className="nav-item col-2">
          <a className="nav-link" href="#">Returns & Orders</a>
        </li>
        <li className="nav-item col-1">
          <a className="nav-link" href="#"><img src="https://img.icons8.com/?size=100&id=9671&format=png&color=ffffff" className="imgsiz" /> Card</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</div>
    <div>
        <nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark" id="gcolor" >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 whitecol"  >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link whitecol" href="#">Amazon miniTV</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sell</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Best Sellers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mobiles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Today's Deals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Electronics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fashion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Customer Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Home & Kitchen</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Releases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Amazone Pay</a>
        </li>
      </ul>
      </div>
    </div>
    </nav>
  </div>
</div>
  )
}

export default Navbar