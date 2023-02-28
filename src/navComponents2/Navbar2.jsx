import React from 'react'
import Hamburger2 from './Hamburger2';
import {NavLink, Link} from "react-router-dom"
import { useState } from 'react';
import NavDrop from './NavDrop';
import { subMenuAnimate } from '../assets/Svg';
import { motion } from 'framer-motion';
import {Tailwind} from "../assets/Svg"
function Navbar() {
    const navlist = ["Dashboard", "Team", "Projects", "Calendar"];
    const [state, setState] = useState(false);
    function handleClick(){
        setState(!state);
    }
    
    return (
        <>
        <nav className = "navbar2 bg-white z-[8] flex items-center justify-between px-7 py-2.5 fixed border-solid border-[0.5px] border-gray-500 top-16 left-0 w-full h-[70px]">
            <div className = "flex items-center">
            <Hamburger2 handleClick = {handleClick} state = {state} />
                <Tailwind />

                
            
            </div>
            <div className = "ms2:block hidden">
                <ul className = "flex items-center" >
                    <NavDrop options = {navlist} name = "Solutions" id = "navdrop1" />

                    <NavLink 
                        className={({ isActive }) => isActive ? 'navlink active' : 'navlink' } 
                        to = "Pricing">
                        Pricing
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => isActive ? 'navlink active' : 'navlink'} 
                        to = "Docs">
                        Docs
                    </NavLink>

                    <NavDrop options = {navlist} name = "More" id = "navdrop2" />
                </ul>
            </div>
        
            <div className = "flex items-center justify-end">
                <Link className = "navlink "> Sign in </Link>
                {/* SIDHARTH WALA IS BELOW */}
                {/* <Link className = "text-white py-1 px-5 rounded-md bg-purple">Sign up</Link> */}
                {/* MEHDI CHANGED THIS BELOW */}
                <button className="dashboard-btn w-20 h-10 flex justify-center items-center ">Sign up</button>
            </div>
        </nav>


        <motion.div 
        id = "ham_menu2" 
        initial="exit"
        animate={state ? "enter" : "exit"}
        variants={subMenuAnimate}
        className = {"fixed ms2:!hidden z-[7] w-[200px] rounded-md left-1 bg-white top-[140px] border-solid border-[0.5px] border-gray-500"}>
            <NavDrop options = {navlist} name = "Solutions" id = "navdrop1" />

            <NavLink 
                className = {({ isActive }) => isActive ? 'active navdrop-navlink ' : 'navdrop-navlink '} 
                to = "Pricing" >
                Pricing
            </NavLink>

            <NavLink 
                className={({ isActive }) => isActive ? 'navdrop-navlink active' : 'navdrop-navlink'} 
                to = "Docs" >
                Docs
            </NavLink>

            <NavDrop options = {navlist} name = "More" id = "navdrop2" />
        </motion.div>
        </>
    )
}

export default Navbar
