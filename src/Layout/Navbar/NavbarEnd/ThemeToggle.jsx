import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="text-2xl ml-3 transition duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme == "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default ThemeToggle;
