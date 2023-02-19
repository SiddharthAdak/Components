import React from 'react'
import "./Navbar.css";
import Hamburger from './Hamburger';
import {NavLink} from "react-router-dom"
import {Tailwind, SearchIcon, BellIcon} from "../assets/Svg"
function Navbar() {
    const navlist = ["Dashboard", "Team", "Projects", "Calendar"]
    return (
        <>
        <nav className = "navbar">
            <div className = "nav-left">
            <Hamburger />
                <Tailwind />

                <ul className = "navbar_list" >
                    {navlist.map((element)=>{
                        return <li key = {element}><NavLink to = {element=="Dashboard"?"/":element}>{element}</NavLink></li>
                    })}
                </ul>
            
            </div>
            
        
            <div className = "nav-right">
                <div className = "searchbar">
                    <label><SearchIcon /></label>
                    <input placeholder = "Search" />
                </div>
                <BellIcon />
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzAqKERFeE4h-K3vnOWQSWJmxRTKTApVjEg&usqp=CAU" />
            </div>
        </nav>
        <div id = "ham_menu" className = "ham_menu">
                    {navlist.map((element)=>{
                        return <NavLink key = {element} to = {element=="Dashboard"?"/":element}>{element}</NavLink>
                    })}
            </div>
        </>
    )
}

export default Navbar
