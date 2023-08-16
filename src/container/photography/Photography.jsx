import React from "react";
import "./photography.css";
import Link from 'react'

import Deliverance from '../../assets/deliverance.jpg';
import LI from '../../assets/littleItaly.jpg';
import LF from '../../assets/longField.jpg';
import Seattle from '../../assets/seattle.jpg';
import Night from '../../assets/night.jpg';
import Metro from '../../assets/metro.jpg';
import Bee from '../../assets/bee.jpg';
import Home from '../../assets/home.jpg';
import Stairs from '../../assets/stairs.jpg';
import DA from '../../assets/Deviantart-Logo-PNG.png';
import Lighthouse from '../../assets/lighthouse.jpg'

const Photography = () => {
    return (
        <div id="photography" className="section__padding">
            <h1  className="portfolio__photography-heading gradient__text">
                I do photography too!
            </h1>

            <div className="portfolio__photography-container">

              <div className="portfolio__photography-image-container">

                <div className="child child-1">
                    <img className="portfolio__photography-container-img" src={LF}></img>
                </div>
                <div className="child child-3">
                    <img className="portfolio__photography-container-img" src={LI}></img>
                </div>
                <div className="child child-4">
                    <img className="portfolio__photography-container-img" src={Seattle}></img>
                </div>
                <div className="child child-5">
                    <img className="portfolio__photography-container-img" src={Night}></img>
                </div>
                <div className="child child-6">
                    <img className="portfolio__photography-container-img" src={Metro}></img>
                </div>
                <div className="child child-2">
                    <img className="portfolio__photography-container-img" src={Deliverance}></img>
                </div>
                <div className="child child-6">
                    <img className="portfolio__photography-container-img" src={Bee}></img>
                </div>
                <div className="child child-6">
                    <img className="portfolio__photography-container-img" src={Home}></img>
                </div>
                <div className="child child-6">
                    <img className="portfolio__photography-container-img" src={Stairs}></img>
                </div>
                <div className="child child-7">
                    <img className="portfolio__photography-container-img" src={Lighthouse}></img>
                </div>

              </div>
           
              
                <div className="portfolio__photography-container-words">
                <p>
                    Photography has been my main creative outlet for close to 7 years. 
                    I have been shooting with Nikon for 5 years and occasionally I limit myself to weaker cameras 
                    to restrict choice and encourage creative ways of shooting. I also occasionally shoot using
                    manual film cameras. If you would like to check out my work, you can refer to my page below! It 
                    contains almost every piece of artwork I've ever shot.
                </p>
              </div>

                <a href="https://www.deviantart.com/photogaber" target="_blank">
                    <img src={DA} className="DA-logo"></img> 
                </a>
                
            </div>
            </div>
        
    );
}

export default Photography;