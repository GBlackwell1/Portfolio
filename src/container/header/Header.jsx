import React from 'react'
import "./header.css"
import portrait from "../../assets/me.png";
import GitCat from "../../assets/githubcat.png";
import GitWord from "../../assets/githubword.png";
import YouTube from "../../assets/youtube.png";
import LinkedIn from "../../assets/linkedin.png";
/* Put back in new portrait when you can */

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
          My focus over the past year has been has been research outside of academics. 
          My main focus is developing projects in the realm of Human-Computer Interactions 
          and Human-Robot Interactions.
        </p>
        <div className="portfolio__header-links">
          <div>
            <img src={GitCat} alt="GitCat" className="portfolio__header-links-git"/>
            <img src={GitWord} alt="GitWord" className="portfolio__header-links-gitword"/>
          </div>
          <div className="portfolio__header-links-yt">
            <img src={YouTube} alt="YouTube" />
          </div>
          <div className="portfolio__header-links-lin">
            <p>Linked</p>
            <img src={LinkedIn} alt="LinkedIn" />
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