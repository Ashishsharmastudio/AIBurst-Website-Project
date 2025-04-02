"use client";

import { FaPhone } from "react-icons/fa6";
import NavbarDropdown from "@/components/Nav/MobileNav";
import NavOptions from "@/components/Nav/NavOptions";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";

const Nav = () => {
  const [search, setSearch] = useState("");
  const [searchBar, setSearchBar] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlightText = () => {
    const bodyElement = document.getElementsByTagName("body")[0];
    const contentElements = bodyElement.getElementsByTagName("*");

    let firstMatchFound = false;

    Array.from(contentElements).forEach((element) => {
      const textContent = element.textContent;

      if (textContent) {
        const index = textContent.toLowerCase().indexOf(search.toLowerCase());

        if (index !== -1 && !firstMatchFound) {
          const regex = new RegExp(`(${search})`, "gi");

          element.innerHTML = element.innerHTML.replace(
            regex,
            "<mark>$1</mark>"
          );

          element.scrollIntoView({ behavior: "smooth", block: "center" });

          firstMatchFound = true;
        }
      }
    });
  };

  return (
    <header className="bg-black sticky top-0 z-50 px-5 md:px-10 lg:px-20">
      <nav className="text-white flex items-center justify-between py-4 sm:py-3 lg:pt-2 max-w-[1800px] mx-auto">
        <Link id="logo" className="flex-1 min-w-40 max-w-56 mr-4" href={"/"}>
          <h1>aiburst.biz</h1>
        </Link>

        {/* Centered Navigation Options with Increased Font Size */}
        <div className="flex-1 flex justify-center">
          <div className="hidden lg:flex gap-8 text-lg lg:text-xl">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-400 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="hover:text-blue-400 transition-colors"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className="lg:hidden">
          <NavbarDropdown />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
