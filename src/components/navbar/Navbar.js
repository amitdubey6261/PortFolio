import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

export class Navbar extends Component {
  render() {
    return (
        <div className="navCon">
            <Link to ="/" className="navitem">Home</Link>
            <Link to ="/portfolio" className="navitem">Portfolio</Link>
            <Link to ="/About" className="navitem">About</Link>
            <Link to ="/Hire-Me" className="navitem">HireMe</Link>
            <Link to ="/Services" className="navitem">Services</Link>
        </div>
    )
  }
}

export default Navbar