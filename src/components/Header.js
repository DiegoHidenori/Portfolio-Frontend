import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='telma-font'>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href='/'>
                        <h1 className='navbar-title transition-main'>Portfolio</h1>
                    </a>
                </div>
                <div className="navbar-links">
                    <a href='/academics'>Academics</a>
                    <a>Resume & CL</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
