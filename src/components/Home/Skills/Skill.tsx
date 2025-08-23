"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { dataSkills } from "@/constant/constant";
const Skill = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-12">
          My <span className="text-[#40ffaa]"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {dataSkills.map((skill, index) => {
            const Icon = skill.icon;

            let scale = 1;
            if (hovered === index) {
              scale = 1.6;
            } else if (hovered === index - 1 || hovered === index + 1) {
              scale = 1.3;
            } else if (hovered === index - 2 || hovered === index + 2) {
              scale = 1.1;
            }

            return (
              <motion.div
                key={skill.id}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 xl:w-20 xl:h-20 flex items-center justify-center rounded-full ">
                  <Icon className="sm:text-5xl text-2xl" />
                </div>
                <p className="mt-3 text-sm font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
