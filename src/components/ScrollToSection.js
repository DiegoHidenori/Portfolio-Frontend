import { motion } from "framer-motion";

const ScrollToSection = ({ sectionId }) => {
    const scrollTo = () => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.a
            className='navbar-links'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }} // Start from 100px below with 0 opacity
            whileInView={{ opacity: 1 }} // Move to original position with full opacity
            transition={{ duration: 0.75, ease: "easeOut" }}
            onClick={scrollTo}
        >
            {sectionId}
        </motion.a>
    );
};

export default ScrollToSection;
