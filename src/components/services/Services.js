import React, { Component } from 'react'
import "./services.css"
import robo from "../../images/iron-man.png"
import ccoding from "../../images/coding.gif"
import globe from "../../images/globe.png"
import { Helmet } from 'react-helmet'
export class Services extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>
                        My-Services
                    </title>
                </Helmet>
                <center><h1 style={{ fontSize: "6vmin", letterSpacing: "4px" }}>SERVICES</h1></center>
                <div className="serviceCon">
                    <div className="serviceI">
                        <h1>MachineLearing</h1>
                        <img id="i1" src={robo} alt="" />
                        <p>
                            The term "artificial intelligence" had previously been used to describe machines that mimic and display "human" cognitive skills that are associated with the human mind, such as "learning" and "problem-solving". This definition has since been rejected by major AI researchers who now describe AI in terms of rationality and acting rationally, which does not limit how intelligence can be articulated.[b]
                        </p>

                    </div>
                    <div className="serviceI">
                        <h1>WebDevlopment</h1>
                        <img src={globe} alt="" />
                        <p>
                            Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
                        </p>
                    </div>
                    <div className="serviceI">
                        <h1>Creative Coding</h1>
                        <img id="i2" src={ccoding} alt="" />
                        <p>
                            (Creative Coding) is a process, based on exploration, iteration, reflection and discovery, where code is used as the primary medium to create a wide range of media artifacts.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Services