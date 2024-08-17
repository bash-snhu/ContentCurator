import React from "react";

function Header() {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="logo">
                        <img src="logo.png" alt="Logo" />
                    </div>
                    <nav className="navigation">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/sevice">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;