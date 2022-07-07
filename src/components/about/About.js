import React, { Component } from 'react'
import Skillper from './skillper/Skillper.js'
import "./about.css"
import django from "../../images/django.png"
import p5 from "../../images/astric.png"
import react from "../../images/react.png"
import tfjs from "../../images/tfjs.png"
import cpp from "../../images/cpp.png"
import Myself from './myself/Myself.js'

const stateo = {
    cppVal: 85,
    nodeJsval: 80,
    pythonVal: 60,
    p5JsVal: 70,
    tenserflowJsVal: 40,
};

export class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cppVal: 0,
            nodeJsval: 0,
            pythonVal: 0,
            p5JsVal: 0,
            tenserflowJsVal: 0,
        }
    }

    render() {
        let hadleClick = () => {
            this.setState(stateo);
        }
        return (
            <div className="aboutCon">
                <div className="skills">
                    <h1 style={{ fontSize: "6vmin", }}>CHECK MY SKILLS</h1>
                    <div className="skill">
                        <img className='language' src={cpp} alt="" />
                        <input className='ranges' value={this.state.cppVal} type="range" name="cppRange" />
                    </div>
                    <div className="skill">
                        <img className='language' src={django} alt="" />
                        <input className='ranges' value={this.state.pythonVal} type="range" name="pythonRange" />
                    </div>
                    <div className="skill">
                        <img className='language' src={react} alt="" />
                        <input className='ranges' value={this.state.nodeJsval} type="range" name="nodeJsRange" />
                    </div>
                    <div className="skill">
                        <img className='language' src={p5} alt="" />
                        <input className='ranges' value={this.state.p5JsVal} type="range" name="P5JsRange" />
                    </div>
                    <div className="skill">
                        <img className='language' src={tfjs} alt="" />
                        <input className='ranges' value={this.state.tenserflowJsVal} type="range" name="TenserFlowJsRange" />
                    </div>
                    <button onClick={hadleClick} >Check</button>
                </div>
                <Skillper property={this.state}/>
                <Myself/>
            </div>
        )
    }
}

export default About