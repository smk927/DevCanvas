import React from "react";
import { motion } from "framer-motion";
import "../styles/LandingPage/process.css";

const Process = ({ steps }) => {
  return (
    <motion.div
      className="lp-sec2"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="item-group">
        {steps.map((title, index) => (
          <motion.div
            key={index}
            className="item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="item-circle">{index + 1}</p>
            <p className="item-title">{title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Process;