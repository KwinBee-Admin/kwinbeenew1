import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navlink.css';
import icon from './final kwinbee.png';
import hamburgerIcon from './icons8-hamburger-24 (1).png'; // Ensure this path is correct

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0,0.9)');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Change the background color based on scroll position
      if (scrollY > 1000) {
        setBackgroundColor('#fcab26');
      } else {
        setBackgroundColor('rgba(0, 0, 0,0.9)');
      }
      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="change" style={{ backgroundColor }}>
      <div className="logo">
        <img src={icon} alt="Kwinbee Logo" />
        <div className="poppins">KWINBEE</div>
      </div>

      <nav>
        <ul className="nav-links" id="navLinks">
          <li><a href="#packages123" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Course Quests</a></li>
          <li><a href="#achievers" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Gallery</a></li>
          <li><a href="aboutus.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>About us</a></li>
          {/*<li><Link to="/coach" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Our Coaches</Link></li>*/}
          <li><Link to="/blog" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Chess Blogs</Link></li>
          <li><a href="#reviews" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Reviews</a></li>
          <li><a href="contact.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Contact Us</a></li>
        </ul>
        <button className="toggle-button" onClick={toggleMenu}>
          <img src={hamburgerIcon} alt="Menu" />
        </button>
      </nav>

      <div className={`dropdown_menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="#packages123" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Course Quests</a></li>
        <li><a href="#achievers" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Gallery</a></li>
        <li><a href="aboutus.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>About us</a></li>
        <li><Link to="/coach" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Our Coaches</Link></li>
        <li><Link to="/blog" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Chess Blogs</Link></li>
        <li><a href="#reviews" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Reviews</a></li>
        <li><a href="contact.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Contact Us</a></li>
      </div>
    </header>
  );
};

export default Navbar;
