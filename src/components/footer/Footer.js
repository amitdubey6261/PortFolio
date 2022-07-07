import React, { Component } from 'react'
import "./Footer.css"

export class Footer extends Component {
  render() {
    return (
      <div className="fooCon">
        <div className="findBar">
          <a href="https://www.instagram.com/amit__dubey___/?hl=en"><i className="fa fa-instagram" ></i></a>
          <a href="https://github.com/amitdubey6261"><i className="fa fa-github" ></i></a>
          <a href="https://twitter.com/Dubey6261"><i className="fa fa-twitter" ></i></a>
          <a href="https://www.google.com"><i className="fa fa-google" ></i></a>
          <a href="https://www.linkedin.com/in/amit-dubey-2339b6204/"><i className="fa fa-linkedin" ></i></a>
          <a href="https://www.youtube.com/channel/UCmg3PieODWj1s4t_qEqIB_Q"><i className="fa fa-youtube" ></i></a>
        </div>
        {/* <hr style={{ border: "2px solid darkblue" }} /> */}
        <div className="copyR">
          <p><i style={{ color: "white" }}>All rights reserved 2020-2024 Powered By - Amit Dubey</i></p>
          <i className="fa fa-indianflag" ></i>
        </div>
      </div>
    )
  }
}

export default Footer