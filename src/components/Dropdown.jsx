import React from 'react'
import { useState } from 'react'
import "./Dropdown.css";
import { DownArrow } from '../assets/Svg';
function Dropdown({options, id}) {
    const [option, setOption] = useState("Select Option");
    
    const toggleDropdown = () => {
        const dropdownOptions = document.getElementById(id);
        dropdownOptions.classList.toggle("open_dropdown");
        const downArrow = document.getElementById(`${id}downArrow`);
        downArrow.classList.toggle("rotate");
    }
    const selectOption = (e) => {
        setOption(e.target.innerHTML);
        
        toggleDropdown();
    }
    return (
        <div className = "dropdown_container">
            <div onClick = {toggleDropdown} className = "dropdown_button">
                <div>{option}</div>
                <DownArrow id = {id+"downArrow"} />
            </div>
            <div id = {id} className = "dropdown_options">
            {options.map((element)=>{
                        return <p onClick = {selectOption} key = {element}>{element}</p>
                    })}
            </div>
            
        </div>
    )
}

export default Dropdown
