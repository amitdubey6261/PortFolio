import React, { Component } from 'react'
import "./portfolio.css"
import Cards from './cards/Cards'
import { Helmet } from 'react-helmet'

const array = [
    {
        title:"Three Js Solar System",
        video:"https://www.youtube.com/embed/3pzoV_6dVXI",
        createdOn:"01-01-2022",
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