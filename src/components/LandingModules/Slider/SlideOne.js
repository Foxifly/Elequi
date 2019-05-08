import React, {Component} from 'react'
import "../../../styles/landing/slideone.scss"
/* REPLACE LOGO WITH CLEARER LOGO BUT THIS ONE IS TEMPORARY*/
const ElequiPineapple = require('../../../img/Elequi-Pineapple.png')
const ElequiLetters = require('../../../img/Elequi-letters.svg')

class SlideOne extends Component {
  render(){
    return(
      <div className="slide-one">
      <div className="logo-container">
      <img className="elequi-pineapple" src={ElequiPineapple}/>
      </div>

      <div className="slide-one-text">
        <img src={ElequiLetters} className="main-slide"/>
        <p className="slide-text-main">Web design and development services.</p>
        </div>

      </div>
    )
  }
}
export default SlideOne
