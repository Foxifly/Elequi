import React, {Component} from 'react';
import "../../../styles/landing/slideglobal.scss"
import {
  FaCloudUploadAlt
} from "react-icons/fa";


class SlideOne extends Component {
  render(){
    return(
      <div className="slide-three">
      <div className="slide-three-icon"><FaCloudUploadAlt size={100} color={"white"}/></div>
        <p className="slide-text">
          Roll out your red carpet with hosting plans available
        </p>
      </div>
    )
  }
}
export default SlideOne
