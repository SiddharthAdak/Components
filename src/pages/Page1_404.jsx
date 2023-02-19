import React from 'react';
import "./Page1_404.css";
import { Link } from 'react-router-dom';
function Page1_404() {
    return (
        <div className = "page404">
            <div className = "page404_container">
            <div className = "page404_content">
                
                <h3>404</h3>
                <h1>Page not found</h1>
                <p>Sorry, we couldn't find the page you were looking for.</p>
                <div className = "page404_links">
                    <Link className = "link1" to = "/">Go back home</Link>
                    <Link className = "link2">
                    <span>Contact support </span>
                    <span className="material-symbols-outlined">arrow_right_alt</span></Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Page1_404;
