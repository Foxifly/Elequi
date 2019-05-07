import React, { Component } from "react";

import '../../../styles/landing/slider.scss'

import {
  FaPlayCircle,
  FaStepForward,
  FaStepBackward,
  FaPauseCircle,
  FaCircle,
  FaGgCircle
} from "react-icons/fa";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import SlideOne from "./SlideOne"
import SlideTwo from "./SlideTwo"
import SlideThree from "./SlideThree"
import SlideFour from "./SlideFour"

class Slider extends Component {
  state = {
    currentButton: 1,
    isPaused: false
  };

  componentDidMount() {
    let slideInterval = setInterval(() => {
      this.autoSlide();
    }, 10000);

    this.setState({
      interval: slideInterval
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  autoSlide = () => {
    this.setState(oldState => {
      const oldStateButton = oldState.currentButton;
      if (oldStateButton !== 4) {
        return { currentButton: Number(oldStateButton) + 1 };
      }

      if (oldStateButton === 4) {
        return { currentButton: 1 };
      }
    });
  };

  changeSlide = toSlide => {
    const { currentButton } = this.state;

    if (toSlide !== currentButton) {
      this.setState({
        currentButton: toSlide
      });
    }
  };

  pauseSlide = () => {
    this.setState({
      isPaused: true
    });
    clearInterval(this.state.interval);
  };

  playSlide = () => {
    this.setState({
      isPaused: false
    });
    clearInterval(this.state.interval);
    let slideInterval = setInterval(() => {
      this.autoSlide();
    }, 10000);
    this.setState({
      interval: slideInterval
    });
  };

  goBack = () => {

    this.setState(oldState => {
      const oldStateButton = oldState.currentButton;
      if (oldStateButton !== 1) {
        return { currentButton: Number(oldStateButton) - 1 };
      }

      if (oldStateButton === 1) {
        return { currentButton: 4 };
      }
    });

  }
  goForward = () => {
    this.setState(oldState => {
      const oldStateButton = oldState.currentButton;
      if (oldStateButton !== 4) {
        return { currentButton: Number(oldStateButton) + 1 };
      }

      if (oldStateButton === 4) {
        return { currentButton: 1 };
      }
    });
  }

  render() {
    const { currentButton, isPaused } = this.state;

    return (
      <div className="slider-container">
        <div className="slideshow">
          {currentButton === 1 && (
            <SlideOne/>
          )}

          {currentButton === 2 && (
            <SlideTwo/>
          )}

          {currentButton === 3 && (
            <SlideThree/>
          )}

          {currentButton === 4 && (
            <SlideFour/>
          )}


          <div className="bottom-button-container">
            <button
              className="slider-button-control"
              onClick={() => this.changeSlide(1)}
            >
              {currentButton === 1 ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
            </button>
            <button
              className="slider-button-control"
              onClick={() => this.changeSlide(2)}
            >
              {currentButton === 2 ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
            </button>
            <button
              className="slider-button-control"
              onClick={() => this.changeSlide(3)}
            >
              {currentButton === 3 ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
            </button>
            <button
              className="slider-button-control"
              onClick={() => this.changeSlide(4)}
            >
              {currentButton === 4 ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
            </button>
            </div>

            <div className="pause-play-container">

            {isPaused === false && (
              <button
                className="pause-play-icons"
                onClick={() => this.pauseSlide()}
              >
                <FaPauseCircle />
              </button>
            )}
            {isPaused === true && (
              <button
                className="pause-play-icons"
                onClick={() => this.playSlide()}
              >
                <FaPlayCircle />
              </button>
            )}
            </div>

            <div className="step-icon-back">
            <button onClick={() => this.goBack()} className="step-icons">
              <FaStepBackward />
            </button>
            </div>

            <div className="step-icon-forward">
            <button onClick={() => this.goForward()} className="step-icons">
              <FaStepForward />
            </button>
            </div>

        </div>
      </div>
    );
  }
}

export default Slider;
