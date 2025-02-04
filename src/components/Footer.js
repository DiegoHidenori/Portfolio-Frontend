import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer no-select'>
            <p>&copy; {new Date().getFullYear()} Diego Tsukayama. All rights reserved.</p>
            <nav className='footer-nav'>
                <a href="/"> About </a>
                <a href="/"> Contact </a>
                <a href="/"> Privacy Policy </a>
            </nav>
        </footer>
    );
}

export default Footer;