import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const AnimationWraper = ({
  children,
  // key,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: 20 },
  transition = { delay: 0.2, duration: 1 },
}) => {
  return (
    <AnimatePresence>
      <motion.div
        // key={key}
        initial={initial}
        whileInView={animate}
        
        transition={transition}
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWraper;
