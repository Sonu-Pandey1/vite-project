/* eslint-disable react/prop-types */
// import React from "react";
import "./Nabbar.css"
import "../App.css"
import { NavLink } from "react-router-dom";

export default function Nabbar(props) {
// console.log(props.Mode);
return (
<div>
  <nav className={`navbar normall-${props.Mode==="dark"?"bolds":"normals"} navbar-expand-lg bg-${props.Mode} text-${ props.Mode==="dark" ? "light" : "dark" }`}>
    <div className="container-fluid navbar">
      {/* <NavLink to={"/"}><a className={`navbar-brand text-${ props.Mode==="dark" ? "light" : "dark" }`} >
        Navbar
      </a></NavLink> */}
      <a className={` me-5 ps-5 navbar-brand text-${ props.Mode==="dark" ? "light" : "dark" }`} >
        <img src="Images\textConverterLogo.jpg" alt="error" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className={`navlink nav-link text-${ props.Mode==="dark" ? "light" : "dark" }`}  to={"/home"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`navlink nav-link text-${ props.Mode==="dark" ? "light" : "dark" }`}  to={"/about"}>About</NavLink>
          </li>

          <li className="nav-item">
           <NavLink className={`navlink nav-link text-${ props.Mode==="dark" ? "light" : "dark" }`} to={"/"}>Services</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`navlink nav-link text-${ props.Mode==="dark" ? "light" : "dark" }  `}  to={"/contact"}>Contact-Us</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`navlink nav-link text-${ props.Mode==="dark" ? "light" : "dark" }  `}  to={"/login"}>Login</NavLink>
          </li>
        </ul>
        <div className="form-check form-switch">
          <input onClick={props.toggle} className="form-check-input" type="checkbox" role="switch"
            id="flexSwitchCheckDefault" />
          <label className=" pe-5 form-check-label " htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </div>
  </nav>
</div>
);
}