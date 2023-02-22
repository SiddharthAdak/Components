import React from 'react'

import Modal1 from '../components/Modal1'
import Modal2 from '../components/Modal2'
import Dropdown from '../components/Dropdown'
import Radio1 from '../components/Radio1';
import Radio2 from '../components/Radio2';
import Stats from '../components/Stats';

import { useNavigate } from 'react-router-dom'
function Dashboard() {
    const navigate = useNavigate();
    
    const options = ["Account settings", "Support", "License", "Sign out"];
    const options1 = ["Account settings", "Support", "License"];
    const options2 = ["None", "Baked Beans", "Colesaw", "Maggi"]
    let p = "Select an option";
    let h = "Radio Buttons"

    const openModal1 = () => {
        const modal1 = document.getElementById("modal1_container");
        modal1.classList.replace("hidden", "flex");
        document.querySelector("body").style.overflow = 'hidden';
    }
    const openModal2 = () => {
        const modal2 = document.getElementById("modal2_container");
        modal2.classList.replace("hidden", "flex");
        document.querySelector("body").style.overflow = 'hidden';
    }
    
    const open404Page1 = () => {
        navigate("/404Page1")
    }

    return (
        <div className = "">
            
            <Modal1 />
            <Modal2 />
            <div className = "flex gap-5 flex-wrap mb-5 px-5">
                <div >
                    <button onClick = {openModal1} className = " dashboard-btn ">Open modal 1</button>
                    <button onClick = {openModal2} className = "dashboard-btn">Open modal 2</button>
                    <button onClick = {open404Page1} className = "dashboard-btn">404 Page 1</button>
                    <Dropdown options = {options} id = "dropdown_options" />
                    
                </div>
                <div className = 'flex gap-2.5 flex-wrap'>
                    <Radio1 p = {p} h1 = {h} options = {options} id = "radio_options1" />
                    
                    <Radio2 p = {p} h1 = {h} options = {options2} id = "radio_options3" />
                    
                </div>
            </div>
            <Stats />
        </div>
    )
}

export default Dashboard
