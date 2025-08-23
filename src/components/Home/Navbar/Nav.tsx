"use client";

import { Cursor } from "@/components/Customer/Cursor";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AnimatePresence, motion } from "motion/react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import ConfirmLinkDialog from "@/components/Customer/ConfirmLinkDialog";
const Nav = () => {
  const [navBg, setNavBg] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showCVDialog, setShowCVDialog] = useState<boolean>(false);

  const handleScrollView = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = () => {
    setNavBg(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={navBg ? "small" : "large"}
          initial={{
            height: navBg ? "10vh" : "6vh",
            backgroundColor: "rgba(0,0,0,0)",
          }}
          animate={{
            height: navBg ? "6vh" : "10vh",
            backgroundColor: navBg ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="z-[10000] fixed w-full"
        >
          <Cursor />
          <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            {/* LOGO */}
            <div
              className={`relative w-[10vh] h-[10vh] flex items-center justify-center`}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollView(link.url)} // dùng url làm id
                  className="text-base cursor-hover font-medium transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* CV button */}
              <button
                className="px-8 xl:py-3.5 py-2 cursor-hover text-sm rounded-lg transition-all duration-300 flex items-center space-x-2  text-white"
                onClick={() => setShowCVDialog(true)}
              >
                <BiDownload className="w-5 h-5" />
                <span className="hidden sm:flex">Download CV</span>
              </button>

              {/* Burger Menu */}
              <HiBars3BottomRight
                className="w-8 h-8 cursor-pointer flex lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        {isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>

      {/* Dialog Download CV */}
      <ConfirmLinkDialog
        open={showCVDialog}
        type="confirm"
        title="Tải xuống CV"
        message="Bạn có muốn tải file CV ngay bây giờ?"
        confirmText="Tải ngay"
        cancelText="Hủy"
        onCancel={() => setShowCVDialog(false)}
        onConfirm={() => {
          setShowCVDialog(false);
          const link = document.createElement("a");
          link.href = "/CV/QuanTran-VN.docx"; // hoặc cv.pdf
          link.download = "TranHanQuan-CV.docx";
          document.body.appendChild(link);
          link.click();
          link.remove();
        }}
      />
    </>
  );
};

export default Nav;
