import React, { Component } from "react";
import "../styles/landing.scss";
import Slider from "./LandingModules/Slider/Slider";
import AboutModule from "./LandingModules/AboutModule";
import FeaturesModule from "./LandingModules/FeaturesModule";
import SpecificationModule from "./LandingModules/SpecificationModule";

class Landing extends Component {
  render() {
    return (
      <div>
        <Slider />
        <AboutModule />
        <FeaturesModule/>
        <SpecificationModule/>
      </div>
    );
  }
}

export default Landing;
