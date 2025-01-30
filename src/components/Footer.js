import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <nav>
                <a href="/"> About </a> | 
                <a href="/"> Contact </a> | 
                <a href="/"> Privacy Policy </a>
            </nav>
        </footer>
    );
}

export default Footer;