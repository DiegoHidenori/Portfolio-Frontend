import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "3px",
                background: "var(--primary-color)",
                scaleX: scrollYProgress,
                transformOrigin: "left",
                zIndex: 100
            }}
        />
    );
};

export default ScrollProgress;
