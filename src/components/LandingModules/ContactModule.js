import React, { Component } from "react";
import "../../styles/landing/quickcontact.scss";

class ContactModule extends Component {
  render() {
    return (
      <div className="contact-module-container">

      <h2 className="module-title-white">Need Some Help?</h2>
      <div className="title-underline"/>

        <form className="contact-module-form">
          <div className="name-input">
            <input id="q-name" className="name-input-box" placeholder="Name" />
          </div>

          <div className="email-input">
            <input id="q-email" className="email-input-box" placeholder="E-mail" />
          </div>

          <div className="message-input">
            <textarea id="q-message" className="message-input-box"  placeholder="Message" />
          </div>

          <div className="contact-button-container">
            <button className="quote-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactModule;
