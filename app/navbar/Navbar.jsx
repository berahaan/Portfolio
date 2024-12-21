"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../ThemeContext";
import { usePathname } from "next/navigation";
export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeNav, setActiveNav] = useState("home");
  // we can use  usePath route to track navigation
  useEffect(() => {
    console.log("Here path is ", path);
    if (path === "/") setActiveNav("home");
    else if (path === "/about") setActiveNav("about");
    else if (path === "/projects") setActiveNav("projects");
    else if (path === "/contact") {
      setActiveNav("contact");
    }
  }, [path]);
  useEffect(() => {
    const savedNav = localStorage.getItem("activeNav");
    if (savedNav) {
      setActiveNav(savedNav);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    localStorage.setItem("activeNav", navItem); // Save activeNav to localStorage
    setMenuOpen(false);
  };

  const isActive = (navItem) =>
    activeNav === navItem
      ? theme === "light"
        ? "text-black border-b-2 border-blue-600"
        : "text-teal-400 border-b-2 border-yellow-300"
      : "";

  return (
    <header>
      <div
        className={`w-full mx-auto flex items-center justify-between px-4 py-3 fixed top-0 border-b-2 shadow-lg z-50 ${
          theme === "light"
            ? "bg-gray-100 text-black"
            : "bg-gray-900 text-white"
        }`}
      >
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-yellow-300 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">BH</span>
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["home", "about", "skills", "projects", "contact"].map((navItem) => (
            <li key={navItem}>
              <Link
                href={`/${navItem === "home" ? "" : navItem}`}
                className={`cursor-pointer ${isActive(navItem)} ${
                  theme === "light"
                    ? "hover:text-yellow-500"
                    : "hover:text-yellow-300"
                }`}
                onClick={() => handleNavClick(navItem)}
              >
                {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          className={`relative z-10 p-2 rounded-full focus:outline-none transition duration-300 ${
            theme === "light"
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className={`md:hidden fixed top-16 right-4 shadow-lg rounded-md w-48 ${
            theme === "light"
              ? "bg-gray-100 text-gray-800"
              : "bg-gray-800 text-white"
          }`}
        >
          <ul className="flex flex-col items-start space-y-2 p-4 text-lg font-medium">
            {["home", "about", "skills", "projects", "contact"].map(
              (navItem) => (
                <li key={navItem}>
                  <Link
                    href={`/${navItem === "home" ? "" : navItem}`}
                    className={`w-full ${
                      theme === "light"
                        ? "hover:text-yellow-500"
                        : "hover:text-yellow-300"
                    }`}
                    onClick={() => handleNavClick(navItem)}
                  >
                    {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
