import React from 'react'

import { TickIcon } from '../assets/Svg'
function Modal1() {
    
    const closeModal1 = () => {
        const modal1 = document.getElementById("modal1_container");
        modal1.classList.replace("flex", "hidden");
        document.querySelector("body").style.overflow = 'visible';
    }
    
    return (

        <div id = "modal1_container" className = "modal_container hidden items-center fixed top-0 left-0 z-20 overflow-hidden justify-center w-screen h-screen bg-gray-300/90 px-7 py-5">
            <div className = "p-5 text-center rounded-lg w-[600px] shadow-lg bg-white">
            <div className = "flex flex-col items-center justify-center gap-4 h-full">
                <TickIcon />
                <h2 className = "text-3xl font-bold">Payment successful</h2>
                <p className = "text-gray-500">Lorem ipsum dolor sit amet. Ut consequatur perspiciatis ea maxime deleniti sed aliquid accusamus ab laboriosam quaerat et facilis nihil qui odio asperiores qui consequatur amet. Et consequuntur similique est quos aliquid et explicabo voluptas At saepe eveniet. Est saepe corrupti eum animi voluptatem et illum quia et fugiat minima.</p>
                <div className = "w-full">
                    <button onClick = {closeModal1} className = " bg-white border-solid border-[0.5px] border-gray-500 px-2 py-2 mr-1 w-[45%] rounded-md">Cancel</button>
                    <button onClick = {closeModal1} className = "px-2 py-2 ml-1 bg-purple text-white w-[45%] rounded-md">Deactivate</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Modal1
