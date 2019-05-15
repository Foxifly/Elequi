import React, { Component } from "react";
import "../styles/landing.scss";
import Slider from "./LandingModules/Slider/Slider";
import AboutModule from "./LandingModules/AboutModule";
import FeaturesModule from "./LandingModules/FeaturesModule";

class Landing extends Component {
  render() {
    return (
      <div>
        <Slider />
        <AboutModule />
        <FeaturesModule/>
      </div>
    );
  }
}

export default Landing;
