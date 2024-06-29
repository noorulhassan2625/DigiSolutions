import React from "react";
import logo from "../Assets/Media/images/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 rounded">
      <div className="container-fluid pe-0">
        <a className="navbar-brand py-0" href="#">
          <img src={logo} width={"100px"} alt="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Case Studies
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link p-0" href="#">
                <button className="btn btn-primary">GET A QUOTE</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
