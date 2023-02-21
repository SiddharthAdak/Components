import React from 'react'
import "./Navbar.css";
import Hamburger from './Hamburger';
import {NavLink} from "react-router-dom"
import {Tailwind, SearchIcon, BellIcon} from "../assets/Svg"
function Navbar() {
    const navlist = ["Dashboard", "Team", "Projects", "Calendar"]
    return (
        <>
        <nav className = "bg-gray-800 flex items-center justify-between px-7 py-2.5 fixed top-0 left-0 h-[60px] z-5 box-border w-full">
            <div className = " flex items-center ">
            <Hamburger />
                <Tailwind />

                <ul className = "flex md:hidden" >
                    {navlist.map((element)=>{
                        return <li className = "mx-2.5 my-2.5" key = {element}><NavLink className = "rounded-[5px] text-gray-400 px-5 py-2 text-base" to = {element=="Dashboard"?"/":element}>{element}</NavLink></li>
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
        <div id = "ham_menu" className = "ham_menu">
                    {navlist.map((element)=>{
                        return <NavLink className = "rounded-[5px] text-gray-400 px-2.5 py-4 text-base" key = {element} to = {element=="Dashboard"?"/":element}>{element}</NavLink>
                    })}
            </div>
        </>
    )
}

export default Navbar
