import { motion } from "framer-motion";
function MotionTitle({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, translateY: "30px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="block"
    >
      {children}
    </motion.span>
  );
}

export default MotionTitle;
