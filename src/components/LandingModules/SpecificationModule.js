import React, { Component } from "react";
import "../../styles/landing/spec.scss";

class SpecificationModule extends Component {
  render() {
    return (
      <div className="spec-container">

        <h3 className="spec-module-title">Is Elequi Right For You?</h3>
        <div className="title-underline" />

        <div className="spec-module">
        <p>
          Elequi isn't meant for everyone. We want to make sure we're the
          perfect match, otherwise our services may not be of use to you and
          your business. Please see the below list to see if Elequi is a match.{" "}
        </p>

        <div className="spec-do-dont-container">
        <div className="spec-module-do">
        <p className="do-dont-title">What we do</p>
        <ul>
          <li>Small business websites </li>
          <li>Personal portfolios and websites</li>
          <li>Single and multiple page applications</li>
        </ul>
        </div>

        <div className="spec-module-dont">
        <p className="do-dont-title">What we don't do</p>
        <ul>
          <li>eCommerence</li>
          <li>Blogs</li>
        </ul>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SpecificationModule;
