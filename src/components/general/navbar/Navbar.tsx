"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import LinkButton from "../LinkButton";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#about", label: "About" },
  { url: "#resume", label: "Resume" },
  { url: "#skills", label: "Skills" },
  { url: "#projects", label: "Projects" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener("scroll", navHandler);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);
  return (
    <nav
      className={`h-18 fixed z-50 w-full transition-all duration-300 ${navBackground ? "bg-slate-900 shadow-md" : ""}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo part */}
        <Logo />

        {/* navLink part */}
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className="text-gray-200 hover:text-cyan-300 font-medium transition-colors "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden"
        >
          {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>
        <MobileNav navOpen={navOpen} />
      </div>
    </nav>
  );
}
