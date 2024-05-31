import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{ x: 500, y: 200 }}
        whileHover={{ scale: 1.2 }}
        drag="x"
        transition={{duration:2}}
      />
    </div>
  );
};

export default Test;
