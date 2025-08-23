"use client";

import React from "react";
import Image from "next/image";
import RotatingText from "@/components/Customer/RotatingText";
import GradientText from "@/components/Customer/GradientText";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const controls = useAnimation();
    const handleScrollView = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col ">
      <div className="relative z-10 flex flex-col items-center space-y-10">
        <Image
          src="/Avatar.png"
          alt="heroimage"
          width={300}
          height={300}
          className="rounded-full border-4 border-gray-200 w-[180px] sm:w-[300px] h-auto"
        />

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide ">
          Creating web products, <br />
          brands,
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            and experiences.
          </GradientText>
        </h1>
        <h2 className="mt-5 text-sm sm:text-lg md:text-2xl lg:text-3xl px-2 text-center sm:text-2x1 font-medium flex items-center">
          Hi! I&apos;m Quan Tran - A Passionate
          <RotatingText
            texts={["Frontend Developer", "Backend Developer", "Web Developer"]}
            mainClassName="px-2 mx-3 sm:px-2 md:px-3 bg-gray-200 text-[#0E1A15] font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>

        <button
          className="flex  flex-row  p-5 rounded-full text-xl  bg-[#40ffaa] hover:bg-[#1b927e] text-[#0E1A15] justify-center items-center space-x-8 "
          onMouseEnter={() =>
            controls.start({
              x: [0, 5, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
            })
          }
          onClick={() => handleScrollView('project')}

          onMouseLeave={() => controls.stop()}
        >
          <span className="font-bold  ">See my work </span>
          <motion.div animate={controls}>
            <FaArrowRight />
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
