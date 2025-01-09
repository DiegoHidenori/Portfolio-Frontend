import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <h1>Portfolio</h1>
                </div>
                <div className="navbar-links">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
