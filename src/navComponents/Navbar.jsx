import React from 'react'
import Hamburger from './Hamburger';
import { useState } from 'react';
import { subMenuAnimate } from '../assets/Svg';
import {NavLink} from "react-router-dom"
import {Tailwind, SearchIcon, BellIcon} from "../assets/Svg"
import { motion } from 'framer-motion';
function Navbar() {
    const navlist = ["Dashboard", "Team", "Projects", "Calendar"]
    const [state, setState] = useState(false);
    function handleClick(){
        setState(!state);
    }
    
    return (
        <>
        <nav className = "bg-gray-800 flex items-center justify-between px-7 py-2.5 fixed top-0 left-0 h-[60px] z-10 box-border w-full">
            <div className = " flex items-center ">
            <Hamburger handleClick = {handleClick} state = {state} />
                <Tailwind />

                <ul className = "ms:flex hidden" >
                    {navlist.map((element)=>{
                        return <li className = "mx-2.5 my-2.5" key = {element}><NavLink 
                        className={({ isActive }) =>
                            isActive ? 'rounded-[5px] active px-5 py-2 text-base' : 'rounded-[5px] text-gray-400 px-5 py-2 text-base'
                        }
                         to = {element=="Dashboard"?"/":element}>{element}</NavLink></li>
                    })}
                </ul>
            
            </div>
            
        
            <div className = "flex items-center">
                <div className = "flex items-center w-72 rounded-lg bg-gray-700 px-[5px] sm:w-[80%]">
                    <label className = "cursor-pointer" htmlFor = "search"><SearchIcon /></label>
                    <input id = "search" className = "bg-gray-700 w-full px-[5px] focus:outline-none text-white " placeholder = "Search" />
                </div>
                <BellIcon />
                <img className = "w-[30px] h-[30px] rounded-full" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzAqKERFeE4h-K3vnOWQSWJmxRTKTApVjEg&usqp=CAU" />
            </div>
        </nav>

            <motion.div 
                id = "ham_menu" 
                initial="exit"
                animate={state ? "enter" : "exit"}
                variants={subMenuAnimate}
                className = {"fixed ms:!hidden z-[9] opacity-100 flex-col top-16 w-[300px] rounded-md left-1 bg-gray-800"}>
                {navlist.map((element)=>{
                    return (
                        <NavLink 
                            className={({ isActive }) => isActive ? 'navlink active !py-4 block text-gray-400 ' : 'navlink !py-4 block text-gray-400'}
                            key = {element} to = {element=="Dashboard"?"/":element}>{element}
                        </NavLink>)
                })}
            </motion.div>
        </>
    )
}

export default Navbar
