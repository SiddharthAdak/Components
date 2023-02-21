import React from 'react'

import { TickIcon } from '../assets/Svg'
function Modal2() {
    const closeModal2 = () => {
        const modal2 = document.getElementById("modal2_container");
        modal2.classList.replace("flex", "hidden");
        document.querySelector("body").style.overflow = 'visible';
    }
    return (

        <div id = "modal2_container" className = "modal_container hidden items-center fixed top-0 left-0 z-20 overflow-hidden justify-center w-screen h-screen bg-gray-300/90 px-7 py-5">
            <div className = "p-5 text-center rounded-lg w-[600px] shadow-lg bg-white">
            <div className = "flex flex-col items-center justify-center gap-4 h-full">
                <TickIcon />
                <h2 className = "text-3xl font-bold">Payment successful</h2>
                <p className = "text-gray-500">Lorem ipsum dolor sit amet. Ut consequatur perspiciatis ea maxime deleniti sed aliquid accusamus.</p>
                <div className = "w-full">
                    <button onClick = {closeModal2} className = "bg-purple px-2 py-2 text-white w-full rounded-md">Go back to dashboard</button>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal2