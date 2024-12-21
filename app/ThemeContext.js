"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load the theme from localStorage on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.className = storedTheme === "dark" ? "dark" : "";
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.className = "";
    }
  }, []); // Only run once on mount

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme === "dark" ? "dark" : "";
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
