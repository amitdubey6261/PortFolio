import React from 'react'
import "./myprofile.css"
import tfjs from "../../../../images/myimg.jpg"

const Myprofile = () => {
    return (
        <div className="myprofileCon">
            <h1>MySelf</h1>
            <img src={tfjs} alt="" />
            <div className="credentials">
                <p>Name : Amit Dubey</p>
                <p>Date Of Birth : 20-03-2003</p>
                <p>Institute : Jaypee University Of Engineering And Technology</p>
                <p>Job Roles : Full Stack Web Devloper | Artificaial Intelligence | Machine Learning</p>
                <p>Email : Amitdubey6261@gmail.com</p>
                <p>Contact : +91-8400107332</p>
                <p>Tech Stack : NODEJS | PYTHON | CPP | JS | P5JS | TENSERFLOW JS | MYSQL | LINUX | DIGITAL OCEAN</p>
            </div>
            <div className="explain">
            <p>Hi , I am amit , I have an extensive 2.5 years of experience in Full-Stack Web-Dev Using Django & Nodejs . I am in sophomore year and currently learning DSA using C++ . I am a good problem solver and wanna explore AI-ML & Web-GL in my upcoming years. I promise that guys soon you will find next generation applications over my website thankyou. </p>
            </div>
        </div>
    )
}

export default Myprofile