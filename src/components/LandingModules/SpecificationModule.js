import React, {Component} from 'react';
import "../../styles/landing/spec.scss"

class SpecificationModule extends Component {
  render() {
    return (
      <div className="spec-container">
      <h3 className="spec-module-title">Is Elequi Right For You?</h3>
      <div className="title-underline"/>

      <p>Elequi isn't meant for everyone. We want to make sure we're the perfect match, otherwise our services may not be of use to you and your business. Please see the below list to see if Elequi is a match. </p>
      <p>What we do</p>
      <ul>
      <li>Small business websites </li>
      <li>Personal portfolios and websites</li>
      <li>Single and multiple page applications</li>
      <li></li>
      <li></li>
      <li></li>

      </ul>

        <p>What we don't do</p>
        <ul>
        <li>eCommerence</li>
        <li>Blogs</li>
        <li></li>
        <li></li>

        </ul>
      </div>
    )
  }
}

export default SpecificationModule;
