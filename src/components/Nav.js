import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <NavLink
            className="nav-item-logo"
            to="/"
            exact
            activeClassName="active"
          >
            <img alt="elequi pineapple logo" src="" />
          </NavLink>

          <NavLink className="nav-item" to="/" exact activeClassName="active">
            Home
          </NavLink>

          <NavLink
            className="nav-item"
            to="/about"
            exact
            activeClassName="active"
          >
            About
          </NavLink>

          <NavLink
            className="nav-item"
            to="/services"
            exact
            activeClassName="active"
          >
            Services
          </NavLink>

          <NavLink
            className="nav-item"
            to="/contact"
            exact
            activeClassName="active"
          >
            Contact Us
          </NavLink>

          <NavLink className="nav-item-quote" to="/quote" exact>
            Get Quote
          </NavLink>
          
        </ul>
      </nav>
    );
  }
}

export default Nav;
