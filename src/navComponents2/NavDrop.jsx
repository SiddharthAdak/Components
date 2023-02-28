import { NavLink } from "react-router-dom";
import { useState } from "react";
import { DownArrow } from '../assets/Svg';
import React from "react";
import { subMenuAnimate } from "../assets/Svg"
import { motion } from "framer-motion";
function NavDrop({options, id, name}) {
    const [isHover, toggleHover] = useState(false);
    
    

    return (
        <div 
            className = " group max-w-[200px] "
            onMouseOver={() => toggleHover(true)}
            onMouseOut={() => toggleHover(false)}>
            <div className = "flex relative items-center justify-between px-5 py-2 w-full cursor-pointer md2:p-2">
                <div className = "text-ellipsis mr-1 relative text-gray-600">{name}</div>
                <DownArrow />
            </div>

            <div className = "pt-5 z-[4] absolute cursor-pointer md2:left-full md2:pt-0 md2:top-0">
            
                <motion.div 
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
                id = {id} 
                className = "  bg-white z-[3] shadow-[0px_0px_5px_0px_rgba(158,157,157)] ms2:w-[200px] rounded-md overflow-hidden w-[130px]">
                    {options.map((element)=>{
                        return (
                            <NavLink 
                                className={({ isActive }) => isActive ? 'active navdrop-navlink' : 'navdrop-navlink' }
                                to = {element}
                                key = {element} >
                                {element}
                            </NavLink>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default NavDrop
