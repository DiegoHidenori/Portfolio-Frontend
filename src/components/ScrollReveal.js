import { motion } from "framer-motion";

const ScrollReveal = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }} // Controls when it triggers
        >
            <h2>I fade in when you scroll! 👀</h2>
        </motion.div>
    );
};

export default ScrollReveal;
