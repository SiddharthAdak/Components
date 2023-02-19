import React from 'react'
import "./Modal.css"
import { TickIcon } from '../assets/Svg'
function Modal1() {
    
    const closeModal1 = () => {
        const modal1 = document.getElementById("modal1_container");
        modal1.classList.remove("open_modal");
        document.querySelector("body").style.overflow = 'visible';
    }
    
    return (

        <div id = "modal1_container" className = "modal_container">
            <div className = "modal">
            <div className = "modal_content">
                <TickIcon />
                <h2>Payment successful</h2>
                <p>Lorem ipsum dolor sit amet. Ut consequatur perspiciatis ea maxime deleniti sed aliquid accusamus ab laboriosam quaerat et facilis nihil qui odio asperiores qui consequatur amet. Et consequuntur similique est quos aliquid et explicabo voluptas At saepe eveniet. Est saepe corrupti eum animi voluptatem et illum quia et fugiat minima.</p>
                <div>
                    <button onClick = {closeModal1} className = "btn_1">Cancel</button>
                    <button onClick = {closeModal1} className = "btn_2">Deactivate</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal1
