import { NavLink } from "react-router";
import { FaBars, FaLaptopCode } from "react-icons/fa";
import NavItemDesktop from "./NavItemDesktop";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import NavItemMobile from "./NavItemMobile";

const navItems = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/projects",
    label: "Projects",
  },
  {
    to: "/blog",
    label: "Blog",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen((isHamburgerOpen) => !isHamburgerOpen);
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span>The Friendly Developer</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            {navItems.map((item) => (
              <NavItemDesktop key={item.to} to={item.to}>{item.label}</NavItemDesktop>
            ))}
          </div>
        </div>

        <div
          className="md:hidden block cursor-pointer"
          onClick={() => handleHamburgerClick()}
        >
          {isHamburgerOpen && <FaX />}
          {!isHamburgerOpen && <FaBars />}
        </div>
      </div>

      {isHamburgerOpen && (
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-start flex-col gap-2">
          {navItems.map((item) => (
            <NavItemMobile key={item.to} handleClick={handleHamburgerClick} to={item.to}>{item.label}</NavItemMobile>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
