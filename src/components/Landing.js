import React, { Component } from "react";
import "../styles/landing.scss";
import Slider from "./LandingModules/Slider/Slider";
import AboutModule from "./LandingModules/AboutModule";
import FeaturesModule from "./LandingModules/FeaturesModule";
import SpecificationModule from "./LandingModules/SpecificationModule";
import ContactModule from "./LandingModules/ContactModule";


class Landing extends Component {
  render() {
    return (
      <div>
        <Slider />
        <AboutModule />
        <FeaturesModule/>
        <SpecificationModule/>
        <ContactModule/>
      </div>
    );
  }
}

export default Landing;
