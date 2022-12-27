import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext/ThemeProvider";
import "./Navbar.css";
export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <Link to="/">
        <div>Home</div>
      </Link>
      <button onClick={toggleTheme as MouseEventHandler<HTMLButtonElement>}>
        {theme}
      </button>
    </div>
  );
}
