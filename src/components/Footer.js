import React, { Component } from "react";
import "../styles/footer.scss";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaEnvelope
} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
      <div className="social-media-icons-container">
      <FaFacebookSquare/>
      <FaInstagram/>
      <FaTwitterSquare/>
      <FaEnvelope/>
      </div>
        <div className="mailing-list-container">
          <form className="mailing-list-form">
            <h4 className="join-mailing-list">Join our Mailing List!</h4>
            <label for="name">Name</label>
            <br />
            <input id="name" />
            <br />
            <label for="email">E-Mail Address</label>
            <br />
            <input id="email" />
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;
