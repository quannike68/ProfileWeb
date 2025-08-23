"use client";

import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className=" text-white py-16 bg-gradient-to-t from-[#029c52]/30 to-[#dbdbdb]/0">
      <div className="w-full md:w-3/4 mx-auto px-4">
        {/* Nội dung */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule a call with me to see if I can help
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Reach out to me today and let’s discuss how I can help you achieve
          your goals.
        </p>

        {/* Thông tin liên hệ */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <FiPhone className="text-[#40ffaa] text-xl" />
            <span className="text-gray-300">+035 353 6335</span>
          </div>
          <div className="flex items-center space-x-3">
            <FiMail className="text-[#40ffaa] text-xl" />
            <span className="text-gray-300">quannike68@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FiMapPin className="text-[#40ffaa] text-xl" />
            <span className="text-gray-300">Ha Noi, Vietnam</span>
          </div>
        </div>

        {/* Icon mạng xã hội */}
        {/* <div className="flex space-x-4">
          {[
            {
              icon: <FaFacebookF />,
              link: "https://www.facebook.com/quan.nike",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#252525] text-white hover:bg-[#40ffaa] transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
