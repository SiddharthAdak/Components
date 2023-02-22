import React from 'react'

function Stats() {
    return (
        <div className = " w-screen flex items-center flex-col justify-center bg-gray-900 px-2.5 py-16">
            <h1 className = "text-white text-3xl font-medium text-center">Trusted by creators worldwide</h1>
            <p className = "text-gray-300 text-center text-sm font-normal my-5">Lorem ipsum dolor sit amet. Ut consequatur perspiciatis ea</p>
            <div  className = " stats flex mt-5 flex-wrap justify-center gap-1" >
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
