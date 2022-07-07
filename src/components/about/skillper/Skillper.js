import React from 'react'
import "./skillper.css"
import django from "../../../images/django.png"
import p5 from "../../../images/astric.png"
import react from "../../../images/react.png"
import tfjs from "../../../images/tfjs.png"
import cpp from "../../../images/cpp.png"

const Skillper = (props) => {
    let {cppVal , nodeJsval , p5JsVal , pythonVal , tenserflowJsVal} = props.property;
    return (
        <>
            <div className="SkillperCon">
                <div className="skilli">
                    <img className='langim' src={cpp} alt="Not Found" />
                    <div className="percent">{cppVal} %</div>
                </div>
                <div className="skilli">
                    <img className='langim' src={django} alt="Not Found" />
                    <div className="percent">{nodeJsval} %</div>

                </div>
                <div className="skilli">
                    <img className='langim' src={react} alt="Not Found" />
                    <div className="percent">{p5JsVal} %</div>
                </div>
                <div className="skilli">
                    <img className='langim' src={p5} alt="Not Found" />
                    <div className="percent">{pythonVal} %</div>
                </div>
                <div className="skilli">
                    <img className='langim' src={tfjs} alt="Not Found" />
                    <div className="percent">{tenserflowJsVal} %</div>
                </div>
            </div>
        </>

    )
}

export default Skillper