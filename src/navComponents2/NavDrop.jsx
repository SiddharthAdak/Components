import "./NavDrop.css";
import { NavLink } from "react-router-dom";
import { DownArrow } from '../assets/Svg';
function NavDrop({options, id, name}) {
    
    
    
    return (
        <div className = "navdrop_container">
            <div className = "navdrop_button">
                <div>{name}</div>
                <DownArrow id = {id+"downArrow"} />
            </div>
            <div id = {id} className = "navdrop_options">
            {options.map((element)=>{
                        return <NavLink to = {element} key = {element}>{element}</NavLink>
                    })}
            </div>
            
        </div>
    )
}

export default NavDrop
