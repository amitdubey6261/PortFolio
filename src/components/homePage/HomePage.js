import React, { Component } from 'react'
import video from "../../images/video.mp4"
import video2 from "../../images/video2.mp4"
import "./HomePage.css"

export class HomePage extends Component {
  render() {
    let x = window.screen.availWidth;
    if (x <= 600) {
      return (
        <>
        <div className='videoCon'>
          <video autoPlay loop src={video2}></video>
        </div>
        </>
      )
    } else {
      return (
        <>
        <div className='videoCon'>
          <video autoPlay loop src={video}></video>
        </div>
        </>
      )
    }
  }
}
// render() {
//   return (
//     <>
//       <div className="videoCon">
//         {
//           if()
//         }
        // {/* <video autoPlay loop={true} src={video}></video> */}
//       </div>
//     </>
//   )
// }
// }

export default HomePage