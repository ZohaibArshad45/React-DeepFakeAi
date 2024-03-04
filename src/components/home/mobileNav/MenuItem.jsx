import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
//   const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    className="py-5 w-full text-center"
    >
    <a
        key={i.name}
        href={i.href}
        className={[
            i.current 
                ? "text-white border-b-2 "
                : "text-gray-300 hover:text-white",
            "px-3 py-2 mt-1 text-sm font-medium  hover:border-b-2 border-[#d55399]"
        ].join(" ")}
        // aria-current={item.current ? "page" : undefined}
    >
        {i.name}
    </a>
    </motion.div>
  );
};
