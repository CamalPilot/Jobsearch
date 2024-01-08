import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import './Mode.scss'

function Mode() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <input type={"checkbox"} onClick={() => toggleTheme()} id={"checkbox"} className="checkbox" />
      <label htmlFor="checkbox" className="checkbox-label">
        <MdWbSunny className="fa-sun"/>
        <FaMoon className="fa-moon"/>
        <span className="ball"></span>
      </label>
    </div>
  );
}

export default Mode;

{/* <button onClick={() => toggleTheme()}></button> */}