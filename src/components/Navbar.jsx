import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-red-700 text-white px-6 py-4 flex justify-between items-center relative">
      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/">HOME</Link>
        <Link to="/custom-sportswear-maker">SPORTSWEAR</Link>
        <Link to="/custom-activewear-maker">ACTIVEWEAR</Link>
        <Link to="/casual-wear">CASUAL WEAR</Link>
        <Link to="/gloves">GLOVES</Link>
        <Link to="/accessories">ACCESSORIES</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/about-us">ABOUT US</Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        <Link
          to="/request-quote"
          className="bg-white text-red-700 px-4 py-2 rounded-full hidden md:block"
        >
          Get Quote
        </Link>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="absolute top-16 left-0 bg-red-700 w-full flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>
            HOME
          </Link>
          <Link to="/custom-sportswear-maker" onClick={() => setOpen(false)}>
            SPORTSWEAR
          </Link>
          <Link to="custom-activewear-maker" onClick={() => setOpen(false)}>
            ACTIVEWEAR
          </Link>
          <Link to="/casual-wear" onClick={() => setOpen(false)}>
            CASUAL WEAR
          </Link>
          <Link to="/gloves" onClick={() => setOpen(false)}>
            GLOVES
          </Link>
          <Link to="/accessories" onClick={() => setOpen(false)}>
            ACCESSORIES
          </Link>
          <Link to="/faq" onClick={() => setOpen(false)}>
            FAQs
          </Link>
          <Link to="/about-us" onClick={() => setOpen(false)}>
            ABOUT US
          </Link>
        </div>
      )}
    </nav>
  );
}
