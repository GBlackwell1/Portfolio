import React from 'react'
import "./feature.css";

const FeatureExtended = ({ title, text, secondText, thirdText, fourthText, stylechoice }) => {
  return (
    <div className={stylechoice}>
      <div className="portfolio__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="portfolio__features-container_feature-text">
        <p>{text}</p>
      </div>
      <div className="portfolio__features-container_feature-text">
        <p>{secondText}</p>
      </div> 
      <div className="portfolio__features-container_feature-text">
        <p>{thirdText}</p>
      </div> 
      <div className="portfolio__features-container_feature-text">
        <p>{fourthText}</p>
      </div> 
    </div>
  )
}

export default FeatureExtended