import { motion } from "framer-motion";
import "./BackgroundMotion.css"; // We'll define styles here

const BackgroundMotion = () => {
  return (
    <motion.div
      className="background-motion"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default BackgroundMotion;
