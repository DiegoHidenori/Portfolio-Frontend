import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa"; // FontAwesome Arrow Icon
import "./ScrollToTop.css"; // Custom styles

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }} // Start hidden
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Show when scrolling down
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            <FaArrowUp />
        </motion.button>
    );
};

export default ScrollToTop;
