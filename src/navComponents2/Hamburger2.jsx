import React from 'react';
import "./Navbar2.css";
import { useState } from 'react';
function Hamburger() {
    const [state, setState] = useState(false);
    function handleClick(){
        setState(!state);
        let ham = document.getElementById("ham2");
        ham.classList.toggle("open_ham");
        let menu = document.getElementById("ham_menu2");
        menu.classList.toggle("open_menu");
    }
    return (
        <div className = "ham2" id = "ham2" onClick = {handleClick}>
        
            <span className = "ham_bar2"></span>
            <span className = "ham_bar2"></span>
            <span className = "ham_bar2"></span>
        </div>
    )
}

export default Hamburger