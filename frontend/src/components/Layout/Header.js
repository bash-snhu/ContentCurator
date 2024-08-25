import React from "react";
import Control from "./Control";

function Header() {
    return (
        <header>
            {/* Header Wrapper */}
            <div className="header-container">
                {/* Logo */}
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>

                {/* Main Navigation */}
                <nav className="main-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/sevice">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

            < Control />
        </header>
    )
}

export default Header;