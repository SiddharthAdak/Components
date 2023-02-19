import React from 'react'
import "./Modal.css"
import { TickIcon } from '../assets/Svg'
function Modal2() {
    const closeModal2 = () => {
        const modal2 = document.getElementById("modal2_container");
        modal2.classList.remove("open_modal");
        document.querySelector("body").style.overflow = 'visible';
    }
    return (

        <div id = "modal2_container" className = "modal_container">
            <div className = "modal">
            <div className = "modal_content">
                <TickIcon />
                <h2>Payment successful</h2>
                <p>Lorem ipsum dolor sit amet. Ut consequatur perspiciatis ea maxime deleniti sed aliquid accusamus.</p>
                <div>
                    <button onClick = {closeModal2} className = "btn_3">Go back to dashboard</button>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal2