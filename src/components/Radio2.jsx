import React from 'react'

function Radio2({options, id, h1, p}) {
    
    return (
        <div className = "w-[300px] p-5 font-display border-solid border-[0.5px] border-gray-500 rounded-lg ">
            <h3 className = "text-xl font-medium"> {h1}</h3>
            <p className = "text-sm text-gray-500 mb-2"> {p} </p>
            <div>
            {options.map((element) => {
                return(
                    
                    <div key = {element}>
                    
                    <label className = "cursor-pointer py-2.5 flex items-center justify-between" htmlFor = {element+id}>
                    <span>{element}</span>
                    <input className = " accent-purple border-0 w-5 h-5" id = {element+id} type="radio" name = {id} />
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