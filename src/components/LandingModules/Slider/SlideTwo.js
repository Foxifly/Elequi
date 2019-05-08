import React, { Component } from "react";
import "../../../styles/landing/slidetwo.scss"
import { MdComputer, MdSmartphone, MdPhoneIphone } from "react-icons/md";

class SlideTwo extends Component {
  render() {
    return (
      <div className="slide-two">

        <div className="slide-two-icon-container">

          <div className="slide-two-icon">
            <MdComputer size={300} color={"white"} />
          </div>

        </div>

        <div className="slide-two-text-container">
        <h1 className="slide-text">Custom and scalable designs built with your business in mind.
        </h1>
        <p className="slide-sub-text">
        We want to make sure that we are a good match. Give us a try to meet your business needs. Request a FREE quote today and get up to $50 off your first website!
        </p>
        </div>

        <div className="slide-two-action-container">
        <button className="action-button">Show Me How</button>
        </div>
      </div>
    );
  }
}
export default SlideTwo;
