import React from 'react'
import "./cards.css"

const Cards = (props) => {
    return (
        <>
            <div key={props.property.githubRepo} className="cardCon">
                <h2>{props.property.title}</h2>
                <iframe allowfullscreen title='1' src={props.property.video}></iframe>
                <h3>{props.property.createdOn}</h3>
                <p>{props.property.desc}</p>
                <button><a href={props.property.githubRepo}>Github</a></button>
            </div>
        </>
    )
}

export default Cards;