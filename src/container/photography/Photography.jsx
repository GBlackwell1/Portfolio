import React from "react";
import "./photography.css";
import TN from "../../assets/Submission2.jpg";
import CentralPark from "../../assets/CentralPark.jpg";
import Swamp from "../../assets/Swamp.jpg";
import Brickell from "../../assets/Brickell.jpg";
import Folly from "../../assets/Folly.jpg"

const Photography = () => {
    return (
        <div id="photography" className="section__padding">
            <h1  className="portfolio__photography-heading gradient__text">
                I do photography too!
            </h1>

            <div className="portfolio__photography-container">
              
                <div className="portfolio__photography-container-images">
                    <img src={TN} className="UP"></img>
                    <img src={CentralPark} className="DOWN"></img>
                    <img src={Swamp} className="UP"></img>
                    <img src={Brickell} className="DOWN" />
                    <img src={Folly} className="UP" />
                </div>
                <div className="portfolio__photography-container-words">
                <p>
                    Photography has been my main creative outlet for over 8 years. 
                    I have been shooting with Nikon for 6 years and occasionally I limit myself to weaker cameras 
                    to restrict choice and encourage creative ways of shooting. I also occasionally shoot using
                    manual film cameras. If you would like to check out my work, you can refer to my portfolio below! It 
                    contains almost every piece of artwork I've shot over the past 2 years.
                </p>
              </div>
                <a href="https://gabrielsblackwell.myportfolio.com/" target="_blank">
                    <p><u>Portfolio</u></p>
                </a>
                
            </div>
            </div>
        
    );
}

export default Photography;