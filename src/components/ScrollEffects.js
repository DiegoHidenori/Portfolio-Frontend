import { motion, useScroll, useTransform } from "framer-motion";

const ScrollEffects = () => {
    const { scrollY } = useScroll(); // Get scroll position
    const y = useTransform(scrollY, [0, 300], [0, -100]); // Map scroll to movement

    return (
        <motion.h1 style={{ y, position: "fixed", top: "10%", left: "50%", transform: "translateX(-50%)" }}>
            I move as you scroll! 🚀
        </motion.h1>
    );
};

export default ScrollEffects;
