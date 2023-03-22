import React from 'react'
import "./footer.css"
import LinkedIn from "../../assets/linkedin9x3.png"

const Footer = () => {
  function copyToClipboard() {
    const text = "gabrielsblackwell@gmail.com";
    navigator.clipboard.writeText(text);
    alert("Copied gabrielsblackwell@gmail.com to clipboard.")
  }

  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-content">
        <h1 className="gradient__text">
          Interested in speaking with me? Click below.
        </h1>
        <button onClick={copyToClipboard} >
          gabrielsblackwell@gmail.com
        </button>
        <a href="https://www.linkedin.com/in/gabriel-blackwell-45224826a/" target="_blank">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Footer;