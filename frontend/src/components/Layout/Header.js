import React from "react";
import Control from "./Control";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            {/* Header Wrapper */}
            <div className="header-container">
                {/* Logo */}
                {/* <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div> */}

                {/* Main Navigation */}
                <nav className="main-nav">
                    <Link to="/" className="header-title">Content<strong>Curator</strong></Link>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/collection/fandoms/">Browse</Link></li>
                        <li><Link to="/">Favorites</Link></li>
                        <li><Link to="/">Profile</Link></li>
                    </ul>
                </nav>
            </div>

            {/* < Control /> */}
        </header >
    )
}

export default Header;