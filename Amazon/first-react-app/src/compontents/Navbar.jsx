import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div>
        <nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark" id="fcolor">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
    <img src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_-300x90.png" className="imgpho" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav col-12 text-center">
        <li className="nav-item col-4">
          <a className="nav-link" href="#">Deliver to Your Address</a>
        </li>
        <li className="nav-item col-2">
          <a className="nav-link" href="#">EN</a>
        </li>
        <li className="nav-item col-2">
          <a className="nav-link" href="#">Hello User</a>
        </li>
        <li className="nav-item col-2">
          <a className="nav-link" href="#">Returns & Orders</a>
        </li>
        <li className="nav-item col-2">
          <a className="nav-link" href="#"><img src="https://img.icons8.com/?size=100&id=9671&format=png&color=ffffff" className="imgsiz" /></a>
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Amazon miniTV</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sell</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gift Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Amazon Pay</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Buy Again</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Coupons</a>
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