import React from 'react';

function Hamburger2({state, handleClick}) {
    
    return (
        <div className = "ms2:hidden flex flex-col w-[22px] mr-5" id = "ham" onClick = {handleClick}>
        
            <span className = {state?" bg-slate-600 ham_bar translate-y-[235%] rotate-[45deg]":"bg-slate-600 ham_bar"}></span>
            <span className = {state?"bg-slate-600 ham_bar opacity-0":"bg-slate-600 ham_bar"}></span>
            <span className = {state?"bg-slate-600 ham_bar translate-y-[-235%] rotate-[-45deg]":"bg-slate-600 ham_bar"}></span>
        </div>
    )
}

export default Hamburger2