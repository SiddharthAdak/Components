import React from 'react';

function Hamburger({state, handleClick}) {
    
    return (
        <div className = "hidden md:flex flex-col w-[22px] mr-5" id = "ham" onClick = {handleClick}>
        
            <span className = {state?"ham_bar translate-y-[235%] rotate-[45deg]":"ham_bar"}></span>
            <span className = {state?"ham_bar opacity-0":"ham_bar"}></span>
            <span className = {state?"ham_bar translate-y-[-235%] rotate-[-45deg]":"ham_bar"}></span>
        </div>
    )
}

export default Hamburger
