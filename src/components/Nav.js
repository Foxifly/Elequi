import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="logo-container">
          <NavLink className="nav-item" to="/" exact activeClassName="active">
            <img alt="elequi pineapple logo" src="" />
          </NavLink>
        </div>
        <div className="item-container">

          <div className="nav-item-container">
            <NavLink
              className="nav-item"
              to="/"
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
            <div className="underline-effect" />
          </div>


          <div className="nav-item-container">
            <NavLink
              className="nav-item"
              to="/about"
              exact
              activeClassName="active"
            >
              About
            </NavLink>
            <div className="underline-effect" />
          </div>

          <div className="nav-item-container">
            <NavLink
              className="nav-item"
              to="/services"
              exact
              activeClassName="active"
            >
              Services
            </NavLink>
            <div className="underline-effect" />
          </div>

          <div className="nav-item-container">
            <NavLink
              className="nav-item"
              to="/contact"
              exact
              activeClassName="active"
            >
              Contact
            </NavLink>
            <div className="underline-effect" />
          </div>
          </div>


        <div className="button-container">
          <NavLink className="nav-item-quote" to="/quote" exact>
            Get Quote
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
