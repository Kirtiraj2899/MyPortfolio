// src/components/Header.js
import { NavLink } from "react-router-dom";
import "./Headersty.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <p>Portfolio.</p>
         <ul>
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/about">About</NavLink></li>
             <li><NavLink to="/skills">Skills</NavLink></li>
             <li><NavLink to="/projects">Projects</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
         </ul>
      </nav>
    </header>
  );
};

export default Header;
