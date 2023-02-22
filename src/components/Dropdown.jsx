import React from 'react'
import { useState } from 'react'

import { DownArrow } from '../assets/Svg';
function Dropdown({options, id}) {
    const [option, setOption] = useState("Select Option");
    
    const toggleDropdown = () => {
        const dropdownOptions = document.getElementById(id);
        dropdownOptions.classList.toggle("hidden");
        const downArrow = document.getElementById(`${id}downArrow`);
        downArrow.classList.toggle("rotate-[180deg]");
    }
    const selectOption = (e) => {
        setOption(e.target.innerHTML);
        
        toggleDropdown();
    }
    return (
        <div className = " max-w-[200px]">
            <div onClick = {toggleDropdown} className = "flex relative items-center justify-between p-2.5 w-full shadow-[0_0px_2px_0px_rgba(128,128,128)] rounded-md cursor-pointer">

                <div className = "text-ellipsis relative text-gray-800 whitespace-nowrap overflow-hidden">{option}</div>
                <DownArrow id = {id+"downArrow"} />
            </div>
            <div id = {id} className = " absolute mt-2.5 bg-white z-[2] box shadow-[0px_1px_5px_1px_rgba(158,157,157)] rounded-md w-[200px] hidden block">
            {options.map((element)=>{
                        return <p className = "text-base cursor-pointer text-gray-800 p-2.5 hover:bg-gray-200" onClick = {selectOption} key = {element}>{element}</p>
                    })}
            </div>
            
        </div>
    )
}

export default Dropdown
