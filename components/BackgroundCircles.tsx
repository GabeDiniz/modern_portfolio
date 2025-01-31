import React from "react";
import { motion } from "framer-motion";

// type Props = {}

export default function BackgroundCircles({}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="absolute w-full h-full inset-0 flex justify-center items-center z-10"
    >
      <div className="absolute border border-neutral/70 rounded-full h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] animate-ping animatecss-slow" />
      {/* <div className="absolute border border-neutral/50 rounded-full h-[300px] w-[300px]" /> */}
      <div className="absolute border border-neutral/50 rounded-full h-[350px] w-[350px] sm:h-[400px] sm:w-[400px]" />
      <div className="absolute border border-highlight/90 rounded-full h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] animate-ping animatecss-slow" />
      <div className="absolute border border-neutral/50 rounded-full h-[500px] w-[500px] sm:h-[600px] sm:w-[600px]" />
    </motion.div>
  );
}
