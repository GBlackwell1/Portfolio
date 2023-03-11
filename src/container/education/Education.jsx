import React from 'react'
import SCImage from "../../assets/cocky.png"
import './education.css'

const Education = () => {
  return (
    <div className="portfolio__education section__padding" id="education">
      <div className="portfolio__education-image">
        <img src={SCImage} alt="SCImage" />
      </div>
      <div className="portfolio__education-content">
        <h4>#1 International Business University nationwide</h4>
        <h4>Top 20 nationwide for best learning communities</h4>
        <h4>Top 50 nationwide for best public university</h4>
        <h1 className="gradient__text">
          My education at the University of South Carolina
        </h1>
        <p>
          As a full-time student in the Capital of South Carolina, 
          I am in the process of getting a top quality education. 
          My course load is split between electrical engineering 
          classes to focus on micro-electronics and circuit analysis, 
          and computer science to focus on algorithms and computer 
          architecture. 
       </p>
      </div>
    </div>
  )
}

export default Education