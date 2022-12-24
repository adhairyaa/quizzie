import React, { MouseEventHandler } from "react";
import { useTheme } from "../../context/themeContext/ThemeProvider";
import "./Navbar.css";
export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <div className="navbar">
      Navbar
      <button onClick={toggleTheme as MouseEventHandler<HTMLButtonElement>}>
        theme
      </button>
    </div>
  );
}
