import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext/ThemeProvider";
import "./Navbar.css";
export function Navbar() {
  const { toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <Link to="/">
        <div className="home-icon">
          <img
            src="https://img.icons8.com/neon/256/home-page.png"
            alt="icon"
          ></img>
        </div>
      </Link>
      <button
        onClick={toggleTheme as MouseEventHandler<HTMLButtonElement>}
        className="themeButton"
      >
        <img
          src="https://img.icons8.com/ios/256/ceiling-light.png"
          alt="light"
        ></img>
      </button>
    </div>
  );
}
