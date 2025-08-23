"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { dataCards } from "@/constant/constant";
import ServiceCard from "./ServiceCard";
import { useInView } from "react-intersection-observer";
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Service = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // chỉ chạy 1 lần
    threshold: 0.1, // 10% xuất hiện mới kích hoạt
  });

  return (
    <motion.div
      ref={ref}
      className="pt-16 pb-16"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        variants={lineVariants}
        className="text-center text-2xl sm:text-4xl xl:text-6xl font-bold text-white"
      >
        Colleborate with brand
      </motion.div>
      <motion.div
        variants={lineVariants}
        className="text-center text-2xl sm:text-4xl xl:text-6xl font-bold text-white"
      >
        and agencies to create
      </motion.div>
      <motion.div
        variants={lineVariants}
        className="text-center text-2xl sm:text-4xl xl:text-6xl font-bold text-white"
      >
        impactful results
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20  items-center"
      >
        {dataCards.map((card, index) => (
          <motion.div key={index} variants={lineVariants}>
            <ServiceCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
