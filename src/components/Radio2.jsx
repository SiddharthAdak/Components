import React from 'react'

import "./Radio2.css"
function Radio2({options, id, h1, p}) {
    
    return (
        <div className = "radio2_container">
            <h3> {h1}</h3>
            <p> {p} </p>
            <div className = "radio2_options">
            {options.map((element) => {
                return(
                    
                    <div className = "radio2_button">
                    
                    <label htmlFor = {element+id}>
                    <span>{element}</span>
                    <input className = "radio2_input" id = {element+id} type="radio" name = {id} />
                    </label>
                    <hr/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Radio2