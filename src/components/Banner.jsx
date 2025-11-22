import React from "react";
import logo1 from "../assets/logo1.png";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#030F27] w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 py-2 md:px-8 gap-[12px] text-white">
      {/* Logo */}
      <img src={logo1} alt="logo" className="w-32 md:w-40 mt-0" />

      {/* WhatsApp */}
      <a
        href="https://wa.me/923279336722"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-white hover:text-[#E01E37]"
      >
        <FaWhatsapp className="border-2 border-[#E01E37] p-1.5 rounded cursor-pointer text-[#E01E37] w-7 h-7" />
        <div>
          <h1 className="text-xs md:text-base">+92 327 9336722</h1>
          <span className="text-[10px] opacity-70 md:text-xs">WhatsApp</span>
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:contact@sportswear.com"
        className="flex items-center gap-3 text-white hover:text-[#E01E37]"
      >
        <Mail className="border-2 border-[#E01E37] p-1.5 rounded cursor-pointer text-[#E01E37] w-7 h-7" />
        <div>
          <h1 className="text-xs md:text-base">contact@sportswear.com</h1>
          <span className="text-[10px] opacity-70 md:text-xs">
            Email Address
          </span>
        </div>
      </a>

      {/* Location */}
      <a
        href="https://www.google.com/maps?q=sialkot+Pakistan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-white hover:text-[#E01E37]"
      >
        <MapPin className="border-2 border-[#E01E37] p-1.5 rounded cursor-pointer text-[#E01E37] w-7 h-7" />
        <div>
          <h1 className="text-xs md:text-base">Sialkot, Pakistan</h1>
          <span className="text-[10px] opacity-70 md:text-xs">Location</span>
        </div>
      </a>
    </div>
  );
};

export default Banner;
