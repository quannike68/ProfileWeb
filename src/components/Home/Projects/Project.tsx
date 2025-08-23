"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ConfirmLinkDialog from "@/components/Customer/ConfirmLinkDialog";
import { dataProjects } from "@/constant/constant";

const Project = () => {
  const [open, setOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const handleCardClick = (href: string) => {
    setPendingHref(href);
    setOpen(true);
  };

  const handleConfirm = () => {
    setOpen(false);
    if (!pendingHref) return;

    const isExternal = /^https?:\/\//.test(pendingHref);
    if (isExternal) {
      window.open(pendingHref, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-[#40ffaa]"> Projects</span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {dataProjects.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => handleCardClick(project.link)}
          >
            <motion.div
              className="relative w-full sm:h-[750px] h-[350px] overflow-hidden rounded-2xl"
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-75"
                sizes="(max-width: 800px) 100vw, 50vw"
                priority={index === 0}
              />
            </motion.div>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="pt-2 font-medium text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <ConfirmLinkDialog
        open={open}
        title="Rời trang?"
        type="info"
        message="Bạn sắp chuyển sang GitHub của dự án. Tiếp tục chứ?"
        confirmText="Đi tới GitHub"
        cancelText="Ở lại"
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Project;
