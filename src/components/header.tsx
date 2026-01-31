import Popover from "@mui/material/Popover";

import React, { useState, useEffect } from "react";
import BasicPopover from "./popup";

const FloatingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi saat user melakukan scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? "pt-2" : "pt-6"
      }`}
    >
      <div
        className={`w-full  max-w-5xl transition-all duration-300 flex items-center justify-between px-6 border border-white/10 shadow-2xl ${
          isScrolled
            ? "h-14 bg-[#0d0d0d]/60 backdrop-blur-lg rounded-full mx-4"
            : "h-16 bg-[#0d0d0d]/60 backdrop-blur-lg rounded-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <h2 className="pb-2 text-white font-bold text-3xl tracking-tight">
            niceguymo<span className="text-blue-500 ">.</span>
          </h2>
        </div>

        {/* Tombol Kanan */}
        <BasicPopover></BasicPopover>
      </div>
    </header>
  );
};

export default FloatingHeader;
