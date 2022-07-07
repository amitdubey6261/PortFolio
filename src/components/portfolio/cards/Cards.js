import React from 'react'
import "./cards.css"

const Cards = (props) => {   
    return (
        <>
        <div className="cardCon">
            <h2>{props.property.title}</h2>
            <iframe allowfullscreen title='1' src={props.property.video}></iframe>
            <h3>{props.property.createdOn}</h3>
            <p>{props.property.desc}</p>   
            <button><a  href="https://www.google.com">Github</a></button> 
        </div>
        </>
    )
}

export default Cards