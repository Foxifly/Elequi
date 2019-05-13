import React, { Component } from "react";
import { FaChartLine } from "react-icons/fa";
import "../../../styles/landing/slidefour.scss"

class SlideFour extends Component {
  render() {
    return (
      <div className="slide-four">
        <div className="slide-four-icon-container">
          <div className="slide-four-icon">
            <FaChartLine size={280} color={"white"} />
          </div>
        </div>

        <div className="slide-four-text-container">
          <h1 className="slide-text">Ready to give Elequi a try?</h1>
          <p className="slide-sub-text">
            We want to make sure that we are a good match. Give us a try to meet
            your business needs. Request a FREE quote today and get up to $50
            off your first website!
          </p>
        </div>

        <div className="slide-four-action-container">
          <button className="action-button">Get Quote</button>
        </div>
      </div>
    );
  }
}
export default SlideFour;
