import React, {Component} from 'react'
import {
  FaBuilding
} from "react-icons/fa";

class SlideOne extends Component {
  render(){
    return(
      <div className="slide-four">
      <div className="slide-four-icon"><FaBuilding size={100} color={"white"}/></div>
        <p className="slide-text">
          Website transformations and from-scratch
        </p>
      </div>

    )
  }
}
export default SlideOne
