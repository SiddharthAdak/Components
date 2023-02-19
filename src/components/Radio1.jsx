import React from 'react'
import "./Radio1.css"
function Radio1({options, id, h1, p}) {

    return (
        <div className = "radio_container">
            <h3> {h1} </h3>
            <p> {p} </p>
            <div className = "radio_options">
            {options.map((element) => {
                return(
                    <div className = "radio_button">
                    <label htmlFor = {element+id}>
                    <input className = "radio_input" id = {element+id} type="radio" name = {id} />
                    <span>{element}</span>
                    </label>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Radio1
