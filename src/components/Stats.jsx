import React from 'react'
import "./Stats.css"
function Stats() {
    return (
        <div className = "stats">
            <h1>Trusted by creators worldwide</h1>
            <p className = "stats_para">Lorem ipsum dolor sit amet. Ut consequatur perspiciatis ea</p>
            <div  className = "stats_container" >
                <div>
                    <h2>8000+</h2>
                    <p>creators on platform</p>
                </div>
                <div>
                    <h2>3%</h2>
                    <p>Flat platform fee</p>
                </div>
                <div>
                    <h2>99.9%</h2>
                    <p>Uptime guarantee</p>
                </div>
                <div>
                    <h2>$70M</h2>
                    <p>paid out to creators</p>
                </div>
            </div>
        </div>
    )
}

export default Stats
