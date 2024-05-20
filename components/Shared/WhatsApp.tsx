"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsApp = () => {
  return (
    <div>
      <motion.div
        className="fixed hidden sm:block bottom-10 right-10"
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <Link href={"https://wa.me/+8801907044259"}>
          <FaWhatsapp size={50} />
        </Link>
      </motion.div>
    </div>
  );
};

export default WhatsApp;
