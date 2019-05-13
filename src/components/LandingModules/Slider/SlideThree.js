import React, {Component} from 'react';
import "../../../styles/landing/slidethree.scss"
import {
  FaCloudUploadAlt
} from "react-icons/fa";


class SlideOne extends Component {
  render(){
    return(
      <div className="slide-three">

          <div className="slide-three-icon-container">
      <div className="slide-three-icon"><FaCloudUploadAlt size={300} color={"white"}/></div>
      </div>

      <div className="slide-three-text-container">

        <p className="slide-text">
        We've Got You Covered
        </p>

        <p className="slide-sub-text">
        Elequi offers a wide range of services including web development, web hosting, and more. Contact us today to find out what we can do for you and your business.  
        </p>
        </div>

        <div className="slide-three-action-container">
        <button className="action-button">View Services</button>
        </div>

      </div>
    )
  }
}
export default SlideOne
