import React, {useState} from "react";
import {getImageUrl} from "../../utils"

import styles from "./Navbar.module.css";

const Navbar = () => {
  const[menuOpen,setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a  className={styles.title}href='/'>Portfolio</a>
        <div className={styles.menu}>
          <img 
          className={styles.menuBtn} 
          src ={
            menuOpen
            ? "/assets/nav/closeIcon.png"
            :"/assets/nav/menuIcon.png"
           }
          alt="menu-button"
          onClick={()=> setMenuOpen(!menuOpen)}
          />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`}
         onClick={() => setMenuOpen(false)}
         >
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#project'>Project</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar