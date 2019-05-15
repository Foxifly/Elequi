import React, { Component } from "react";
import "../../styles/landing/features.scss";

import {
  FaCode,
  FaSearchDollar,
  FaBroom,
  FaFileSignature,
  FaMobile,
  FaCloud
} from "react-icons/fa";

class FeaturesModule extends Component {
  render() {
    return (
      <div className="features-module-container">
        <div className="features-sub-module">
          <h3 className="features-sub-module-title">Hosting Plans Available</h3>
          <div className="features-sub-module-icon">
            <FaCloud size={35} />
          </div>
          <p className="features-sub-module-text">
            Hosting plans managed from trusted providers to ensure maximum speed
            and uptime.
          </p>
        </div>

        <div className="features-sub-module">
          <h3 className="features-sub-module-title">Responsive Designs</h3>
          <div className="features-sub-module-icon">
            <FaMobile size={35} />
          </div>
          <p className="features-sub-module-text">
            Designs are created for devices of any size and shape to optimize
            your customer reach.{" "}
          </p>
        </div>

        <div className="features-sub-module">
          <h3 className="features-sub-module-title">Modern Look and Feel</h3>
          <div className="features-sub-module-icon">
            <FaCode size={35} />
          </div>
          <p className="features-sub-module-text">
            All websites are developed using the popular JavaScript framework,
            React.
          </p>
        </div>

        <div className="features-sub-module">
          <h3 className="features-sub-module-title">Competitive Quotes </h3>
          <div className="features-sub-module-icon">
            <FaFileSignature size={35} />
          </div>
          <p className="features-sub-module-text">
            Quotes are tailored to your budgets and business, and they're free!
          </p>
        </div>

        <div className="features-sub-module">
          <h3 className="features-sub-module-title">Maintenance Made Easy</h3>
          <div className="features-sub-module-icon">
            <FaBroom size={35} />
          </div>
          <p className="features-sub-module-text">
            Maintenance plans are available for any website changes you require
            down the road.
          </p>
        </div>

        <div className="features-sub-module">
          <h3 className="features-sub-module-title">SEO Services</h3>
          <div className="features-sub-module-icon">
            <FaSearchDollar size={35} />
          </div>
          <p className="features-sub-module-text">
            We will optimize your search appearances with Google to get you on
            top of your competitors.{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default FeaturesModule;
