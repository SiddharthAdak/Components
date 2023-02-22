import React from 'react'

function Radio1({options, id, h1, p}) {

    return (
        <div className = "radio_container max-w-[400px] font-display border-solid border-[0.5px] rounded-lg h-max p-5 border-gray-500 ">
            <h3 className = " font-medium text-xl"> {h1} </h3>
            <p className = " text-sm text-gray-500 mb-2"> {p} </p>
            <div className = "flex items-center gap-y-2 gap-x-5 flex-wrap">
            {options.map((element) => {
                return(
                    <div key = {element} className = "radio_button">
                    <label className = " text-base gap-2 cursor-pointer flex items-center" htmlFor = {element+id}>
                    <input className = " accent-purple border-0 w-5 h-5" id = {element+id} type="radio" name = {id} />
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
