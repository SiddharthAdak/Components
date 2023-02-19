import React from 'react';
import "./Navbar.css";
import { useState } from 'react';
function Hamburger() {
    const [state, setState] = useState(false);
    function handleClick(){
        setState(!state);
        let ham = document.getElementById("ham");
        ham.classList.toggle("open_ham");
        let menu = document.getElementById("ham_menu");
        menu.classList.toggle("open_menu")
    }
    return (
        <div className = "ham" id = "ham" onClick = {handleClick}>
        
            <span className = "ham_bar"></span>
            <span className = "ham_bar"></span>
            <span className = "ham_bar"></span>
        </div>
    )
}

export default Hamburger
