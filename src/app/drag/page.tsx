"use client";

import React from "react";

import { motion } from "framer-motion";
export default function page() {
  return (
    <div>
      <Box />
    </div>
  );
}

function Box() {
  return (
    <div className=" flex items-center  h-screen p-20">
      <motion.div
        className=" w-[15rem] h-[15rem] rounded-lg bg-zinc-800 "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          left: 90,
          right: 90,
          top: 90,
          bottom: 90,
        }}
      ></motion.div>
    </div>
  );
}
