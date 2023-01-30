import React, { Component } from 'react'
import "./portfolio.css"
import Cards from './cards/Cards'
import { Helmet } from 'react-helmet'

const array = [
    {
        title:"3d Typing dash",
        video:"https://www.youtube.com/embed/cfaZtkbETX8",
        createdOn:"31-01-2023",
        desc:"The problem that '3DTypingDash' solves is improving typing speed and accuracy for individuals and organizations as we know how benificial can a good typing speed be in a daily life scinario. By using this project, users can improve their typing skills and increase their efficiency in their work and personal life which in case include: Increases typing proficiency and speed, leading to increased productivity. Helps to reduce typos and errors in written work. Improves hand-eye coordination and muscle memory for typing. Enhances overall computer skills and proficiency. Offers a variety of typing exercises and tests to cater to different skill levels and needs.",
        githubRepo:"https://devfolio.co/projects/d-typingdash-240b",
    },
    {
        title:"NoteChat",
        video:"https://www.youtube.com/embed/rLjDezFgg8g",
        createdOn:"20-02-2022",
        desc:"Django Based Full Stack Notes Taking Application Built in 24Hrs in Hackathon",
        githubRepo:"https://github.com/amitdubey6261/SolarSystem",
    },
    {
        title:"Three Js Solar System",
        video:"https://www.youtube.com/embed/3pzoV_6dVXI",
        createdOn:"01-01-2022",
        desc:"Cannon And Three Js Powered Website ",
        githubRepo:"https://github.com/amitdubey6261/SolarSystem",
    },
    {
        title:"Cannon Engine Implimentation",
        video:"https://www.youtube.com/embed/8N_6_t8S7Tg",
        createdOn:"01-02-2022",
        desc:"Cannon And Three Js Powered Website ",
        githubRepo:"https://github.com/amitdubey6261/SolarSystem",
    },
    {
        title:"Full Stack Ecommerce Website In Django",
        video:"https://www.youtube.com/embed/WX3t990bmO4",
        createdOn:"1-07-2021",
        desc:"This website is an full stack Ecommerce website in which all the images are coming from the database , pure HTML5 , CSS3 are used in frontend and the backend is devloped in Python .",
        githubRepo:"https://www.youtube.com/embed/WX3t990bmO4",
    },
    {
        title:"AI Heuristics Search - The Stair Paths",
        video:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6911688311807889408",
        createdOn:"07-08-2021",
        desc:"This web application is frontend application with no backend , All the calaculations has been done in frontend , The famous stair path recursive algorithm has been used to devlop it. The plugins are HTML , CSS  , VANILLA JS , ADOBE ILLUSTRATOR",
        githubRepo:"https://github.com/amitdubey6261/AI_Huristics",
    },
    {
        title:"The Notes Taker For Work UnderTaker",
        video:"https://www.youtube.com/embed/QY-uUHJP8Dg",
        createdOn:"17-03-2022",
        desc:"This Web Application is a best example to learn document object Mode [DOM] , and to realise power of dom , Pure VANILLA JS is used with minimal html and css",
        githubRepo:"https://github.com/amitdubey6261/ReminderApp",
    },
    {
        title:"Reporter-Dubey_ji",
        video:"https://www.youtube.com/embed/ipGndKZSUqc",
        createdOn:"16-03-2022",
        desc:"This Web application is frontend application build under react Js , In This web application using the NEWS API FETCH method to call Json data and display over the application .",
        githubRepo:"https://github.com/amitdubey6261/NewsWebsite",
    },
    {
        title:"Day-Night State Change Application",
        video:"https://www.youtube.com/embed/QdvuM215rsI",
        createdOn:"11-05-2022",
        desc:"This application is frontend application and made under learning process of REACT",
        githubRepo:"https://github.com/amitdubey6261/DayNightusingTemp_ReactJS",
    },
    {
        title:"My PortFolio Itself",
        video:"https://www.youtube.com/embed/m_7_7eo4tTc",
        createdOn:"07-07-2022",
        desc:"Fully functional react frontend app using React | React-Router | EmailJS | SMTPJs  Plugins",
        githubRepo:"https://github.com/amitdubey6261/PortFolio",
    },
]

export class Portfolio extends Component {
    render() {
        return (
            <>
            <Helmet>
                <title>
                    My-Port-Folio
                </title>
            </Helmet>
                <center><h1 style={{ fontSize: "6vmin" }}>PROJECTS</h1></center>
                <div className="portCon">
                    {
                        array.map( (x) => <Cards property={x}/>)
                    }
                </div>
            </>
        )
    }
}

export default Portfolio