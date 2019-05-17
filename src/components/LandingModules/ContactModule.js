import React, {Component} from 'react';
import "../../styles/landing/quickcontact.scss"

class ContactModule extends Component {
  render() {
    return(
      <div className="contact-container">
      <form>

      <label for="q-name">Name</label>
      <input id="q-name" className="name-input"></input>

      <label for="q-email">E-mail</label>
      <input id="q-email" className="email-input"></input>

      <label for="q-message">Message</label>
      <textarea id="q-message" className="message-input"></textarea>

      </form>

      </div>
    )
  }
}

export default ContactModule;
