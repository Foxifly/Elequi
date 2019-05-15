import React, {Component} from 'react'
import "../../styles/landing/about.scss"

class AboutModule extends Component {
  render(){
    return(
      <div className="about-module-container">

      <h2 className="about-module-title">Digital Determination</h2>
      <div className="title-underline"/>
      <p className="about-module-text">Elequi is a new freelance Web Development and Design company created with small businesses in mind. We offer <strong>affordable</strong> websites built using HTML, CSS, and JavaScript (React). We want to give our clients the most <strong>custom and specialized</strong> experience possible. Our passion is your benefit; we like to call it <strong>Digital Determination</strong>.
      <br/><br/>
      We specialize in <strong>fast, dynamic, and captivating</strong> websites unique for you and your business. Our websites are built for all platforms including desktops, tablets, and mobile devices so your clients can take your business anywhere. There are almost 2 billion websites in the world today and over 55% of prospective clients are only spending 15 seconds on your website. How can you get them to stay longer? How can you make your website stand out from 2 billion other websites? <strong>Elequi can help</strong>. </p>
      </div>
    )
  }
}
export default AboutModule
