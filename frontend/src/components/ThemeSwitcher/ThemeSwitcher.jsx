import React from "react";
import { useState } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import "./theme-switcher.css";

function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState("dark");

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setCurrentTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <button className="theme-switcher" onClick={toggleTheme}>
            {currentTheme === "light" ? <FaMoon /> : <FaRegMoon />}
        </button>
    );
}

export default ThemeSwitcher;