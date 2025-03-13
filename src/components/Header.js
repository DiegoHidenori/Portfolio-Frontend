import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import ScrollToSection from "./ScrollToSection";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    console.log(location.pathname);

    return (
        <header className="telma-font">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">
                        <motion.h1
                            className="navbar-title"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Portfolio
                        </motion.h1>
                    </a>
                </div>
                <div className="navbar-links-container">
                    {isHomePage && (
                        <>
                            <ScrollToSection sectionId="Projects" />
                            <ScrollToSection sectionId="Capstone" />
                            <ScrollToSection sectionId="Education" />
                            <ScrollToSection sectionId="About" />
                        </>
                    )}
                    {/* <a href='/academics' className='navbar-links'>Academics</a> */}
                    <motion.a
                        href="/academics"
                        className="navbar-links"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Academics
                    </motion.a>
                    {/* <a href="/contact" className='navbar-links'>Contact</a> */}
                    <motion.a
                        // href='/contact'
                        className="navbar-links"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                    </motion.a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
