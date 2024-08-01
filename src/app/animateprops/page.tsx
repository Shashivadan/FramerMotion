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
        initial={{ opacity: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        animate={{ x: 1175, opacity: 1, rotate: 360 }}
        className=" w-[15rem] h-[15rem] rounded-lg bg-zinc-800 "
      ></motion.div>
    </div>
  );
}
