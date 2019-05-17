import React, { Component } from "react";
import "../../styles/landing/spec.scss";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact
} from "react-icons/fa";

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
            your business. Please see the below list to see if Elequi is a
            match.{" "}
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

        <div className="spec-how-its-done">
          <p className="do-dont-title">How We Do It</p>
          <FaHtml5 size={30} />
          <FaCss3Alt size={30} />
          <FaSass size={30} />
          <FaJsSquare size={30} />
          <FaReact size={30} />
          <br/>
          <p className="languages">  HTML • CSS • Sass • JavaScript • React</p>

        </div>
      </div>
    );
  }
}

export default SpecificationModule;
