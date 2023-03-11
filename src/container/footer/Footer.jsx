import React from 'react'
import "./footer.css"
import LinkedIn from "../../assets/linkedin9x3.png"

const Footer = () => {
  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-content">
        <h1>Interested in speaking with me? Click below. </h1>
        <button>gabrielsblackwell@gmail.com</button>
        <a href="https://cat-bounce.com/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Footer