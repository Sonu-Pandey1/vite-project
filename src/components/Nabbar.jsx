/* eslint-disable react/prop-types */
// import React from "react";
import "../App.css"
import { NavLink } from "react-router-dom";

export default function Nabbar(props) {
console.log(props.Mode);
return (
<div>
  <nav className={`navbar navbar-expand-lg bg-${props.Mode} text-${ props.Mode==="dark" ? "light" : "dark" }`}>
    <div className="container-fluid">
      {/* <NavLink to={"/"}><a className={`navbar-brand text-${ props.Mode==="dark" ? "light" : "dark" }`} >
        Navbar
      </a></NavLink> */}
      <a className={`navbar-brand text-${ props.Mode==="dark" ? "light" : "dark" }`} >
        Navbar
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className={"navlink"}  to={"/home"}><a className={`nav-link text-${ props.Mode==="dark" ? "light" : "dark" }`} aria-current="page"
              >
              Home
            </a></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={"navlink"}  to={"/about"}><a className={`nav-link text-${ props.Mode==="dark" ? "light" : "dark" }`} aria-current="page"
              >
              About
            </a></NavLink>
          </li>
          <li className="nav-item">
           <NavLink className={"navlink"} to={"/services"}> <a className={`nav-link text-${ props.Mode==="dark" ? "light" : "dark" }`} aria-current="page">
              Services
            </a></NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`navlink nav-link text-${ props.Mode==="dark" ? "light" : "dark" }  `}  to={"/contact"}>Contact-Us</NavLink>
          </li>

          <li className={`nav-item dropdown text-${ props.Mode==="dark" ? "light" : "dark" }`}>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
        <div className="form-check form-switch">
          <input onClick={props.toggle} className="form-check-input" type="checkbox" role="switch"
            id="flexSwitchCheckDefault" />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </div>
  </nav>
</div>
);
}