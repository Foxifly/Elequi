import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
const ElequiLogo = require('../img/Elequi-Word-Logo.svg')

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="logo-container">
          <NavLink className="nav-item" to="/" exact>
            <img className="elequi-logo" alt="elequi pineapple logo" src={ElequiLogo} />
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
          <button className="quote-button">Get Quote</button>
        </div>
      </nav>
    );
  }
}

export default Nav;
