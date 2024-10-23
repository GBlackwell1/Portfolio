import React from 'react'
import "./header.css"
import portrait from "../../assets/me.png";
import GitHub from "../../assets/github9x3.png";
import YouTube from "../../assets/youtube9x3.png";
import LinkedIn from "../../assets/linkedin9x3.png";

const Header = () => {
  return (
    <div className="portfolio__header section__padding" id="home">
      <div className="portfolio__header-content">
        <h1 className="gradient__text">
          Who is Gabriel Blackwell?
        </h1>
        <p>
          I am a Computer Engineering student at University of South Carolina, 
          which belongs in the top 100 public universities in the US for engineering. 
          My focus over the past year has been research outside of academics. 
          My main focus is developing projects in the realm of Human-Computer Interactions 
          and Human-Robot Interactions.
        </p>
        <div className="portfolio__header-links">
          <div>
            <a href="https://github.com/GBlackwell1" target="_blank">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href="https://www.youtube.com/channel/UCd5QUkMRgLIAvRb9qeNd33w" target="_blank">
              <img src={YouTube} alt="YouTube" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-blackwell-45224826a/" target="_blank">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio__header-image">
        <img src={portrait} alt="portrait" />
      </div>
    </div>
  )
}

export default Header