import React, { Component } from "react";
import "../../../styles/landing/slidetwo.scss";
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
          <h1 className="slide-text">Flexibility Done Right</h1>
          <p className="slide-sub-text">
            Custom and scalable designs built with your business in mind.
            Whether your customers are on their computers or on the go, Elequi's
            websites are designed for all platforms.
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
