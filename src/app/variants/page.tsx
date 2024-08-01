"use client";

import React, { useState } from "react";

import { delay, motion, VariantLabels } from "framer-motion";
export default function page() {
  return (
    <div>
      <Box />
    </div>
  );
}

function Box() {
  const [noBoxs, setNoBox] = useState(6);

  const boxVarinat = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const BoxList = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className=" flex items-center gap-3  h-screen p-20">
      <motion.ul
        variants={boxVarinat}
        initial="hidden"
        animate="visible"
        className=" flex gap-3 bg-zinc-800 rounded-lg p-6"
      >
        {" "}
        {[...Array(noBoxs)].map((item, index) => (
          <>
            <motion.li
              whileHover={{ rotate: 360, radius: 100 }}
              transition={{ duration: 0.3 }}
              variants={BoxList}
              key={index}
              className="w-60 h-60 rounded-lg bg-zinc-900 list-none"
            />
          </>
        ))}
      </motion.ul>
    </div>
  );
}
