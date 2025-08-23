import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100002] bg-black w-full h-screen"
        onClick={() => setIsOpen(false)}
      />

      <div
        className="fixed inset-0 transform transition-all right-0 duration-500 
                   z-[100002] bg-black opacity-70 w-full h-screen"
      ></div>

      {/* navlinks */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-white fixed justify-center items-center flex flex-col h-full 
                   w-[80%] sm:w-[60%] bg-[#0E1A15] space-y-12 z-[100050] right-0 p-6 divide-y-3 divide-dashed divide-gray-500/30"
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="">{link.label}</p>
          </Link>
        ))}

        <button
          className="flex w-1/2 flex-row  p-5 rounded-2xl  bg-gray-50 text-[#0E1A15] justify-center items-center space-x-8 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-bold text-xl">Exit </span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaArrowRight />
          </motion.div>
        </button>
      </motion.div>
    </>
  );
}
