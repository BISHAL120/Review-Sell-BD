"use client";
import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./Dark-Mode-Button";
import { FaRegCircleUser } from "react-icons/fa6";
import CardItem2 from "./Card2";
import CardItem3 from "./Card3";
import CardItem4 from "./Card4";
import CardItem1 from "./Card";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="wrapper px-3">
      {" "}
      <div className=" flex -tracking-tighter items-center justify-between">
        <motion.div
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="py-6"
        >
          <p className="text-2xl font-bold dark:text-slate-200 text-[#1e1c1c]">
            VISION IT
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <div className="flex gap-5 items-center justify-center">
            <FaRegCircleUser size={24} />
            <ModeToggle />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="pt-28 text-center text-3xl font-medium dark:text-slate-200 text-[#1e1c1c]"
      >
        <p>Learn and Earn With</p>
        <p className="mt-3 text-4xl -tracking-tighter dark:text-slate-200 text-[#1e1c1c]">
          Vision IT
        </p>
      </motion.div>
      <div className="mb-32">
        <div className="pt-28 text-3xl font-medium dark:text-slate-200 text-[#1e1c1c] grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* <CardItem /> */}
          <CardItem1 />
          <CardItem2 />
          <CardItem3 />
        </div>
      </div>
    </div>
  );
};

export default Main;
