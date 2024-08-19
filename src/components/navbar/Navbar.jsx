import React from 'react'
import { useState } from 'react';
import "./navbar.css";
import { RiMenu3Line ,RiCloseLine } from 'react-icons/ri';

// Wrapped with react fragment
const Menu = () => (
  <>  
  <p>< a href="#home">Home</a></p>
  <p>< a href="#experience">Experience</a></p>
  <p>< a href="#ongoingprojects">Lab Work</a></p>
  <p>< a href="#projects">Projects</a></p>
  <p>< a href="#youth4youth">Y4Y</a></p>
  <p>< a href="#photography">Photography</a></p>
  <p>< a href="#education">Education</a></p>
  </>        
)
// BEM -> Block Element Modifier
// naming convention

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
      <p className="portfolio__navbar-links_name">Gabriel Blackwell</p>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="portfolio__navbar-menu">
        {/* SYNTAX FOR CALL COULD BE WRONG TODO: */}
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links ">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar