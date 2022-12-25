import React, { MouseEventHandler } from "react";
import { useTheme } from "../../context/themeContext/ThemeProvider";
import "./Navbar.css";
export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <div>Home</div>
      <button onClick={toggleTheme as MouseEventHandler<HTMLButtonElement>}>
        {theme}
      </button>
    </div>
  );
}
