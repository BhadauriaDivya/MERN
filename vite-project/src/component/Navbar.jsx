import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body p-2" data-bs-theme="dark">
        <a className="navbar-brand" href="#">
          DBS Collection
        </a>
        <ul className="navbar-nav list-group list-group-horizontal">
          <li className="nav-item me-5">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">
              Product
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success me-4" type="submit">
            Search
          </button>
          <button className="btn btn-outline-secondary" type="submit">
            Login
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
