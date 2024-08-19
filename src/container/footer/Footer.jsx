import React from 'react'
import "./footer.css"
import LinkedIn from "../../assets/linkedin9x3.png"
import Resume from "../../assets/Gabriel_Blackwell_Resume-3.pdf";

const Footer = () => {

  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-content">
        <h1 className="gradient__text">
          Interested in speaking with me? Want to see my industry experience? Click below.
        </h1>
        <div>
          <button >
            <a href="mailto:gabrielsblackwell@gmail.com">
            Email
            </a>
          </button>
          <button >
            <a href={Resume} target="_blank">
            Resume
            </a>
          </button>
        </div>
        <a href="https://www.linkedin.com/in/gabriel-blackwell-45224826a/" target="_blank">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Footer;