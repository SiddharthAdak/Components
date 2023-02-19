import React from 'react'
import "./Navbar2.css";
import Hamburger from './Hamburger2';
import {NavLink, Link} from "react-router-dom"
import NavDrop from './NavDrop';
import {Tailwind} from "../assets/Svg"
function Navbar() {
    const navlist = ["Dashboard", "Team", "Projects", "Calendar"]
    return (
        <>
        <nav className = "navbar2">
            <div className = "nav2-left">
            <Hamburger />
                <Tailwind />

                
            
            </div>
            <div className = "nav2-middle">
                <ul className = "navbar2_list" >
                <NavDrop options = {navlist} name = "Solutions" id = "navdrop1" />
                    <NavLink className = "navlink" to = "Pricing">Pricing</NavLink>
                    <NavLink className = "navlink" to = "Docs">Docs</NavLink>
                <NavDrop options = {navlist} name = "More" id = "navdrop2" />
                </ul>
            </div>
        
            <div className = "nav2-right">
                <Link className = "navlink">Sign in</Link>
                <Link className = "navlink">Sign up</Link>
            </div>
        </nav>
        <div id = "ham_menu2" className = "ham_menu2">
            <NavDrop options = {navlist} name = "Solutions" id = "navdrop1" />
                    <NavLink className = "navlink" to = "Pricing">Pricing</NavLink>
                    <NavLink className = "navlink" to = "Docs">Docs</NavLink>
            <NavDrop options = {navlist} name = "More" id = "navdrop2" />
        </div>
        </>
    )
}

export default Navbar
