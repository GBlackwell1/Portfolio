import React from 'react'
import "./hi3tech.css"
import { Feature } from "../../components"
import Sponsors from "../../assets/sponsors-light.png";
const featuresData = [
  {
    title: 'Remote Robotics Lab',
    text: 'My personal project, in the early stages of development. It combines Augmented Reality with HRI to allow user’s to affordably remote access labs and operate equipment via a handheld device.',
    expyes: false
  },
  {
    title: 'The ALLURE Platform',
    text: 'I work as a User testing moderator for the ALLURE project, which has published nationally. We use AI and a Rubik’s cube to study a user’s behaviors and maximize their learning process.',
    expyes: false
  },
  {
    title: 'QuitSTART Novelty in Healthcare',
    text: 'A multi-university project that helps active nicotine addicts stop smoking via  a novel chat-bot. This project has multiple private practices currently employing the application.',
    expyes: false
  },
  {
    title: 'Chat-bot Development',
    text: 'As AI and chat-bot development continue to be at the forefront of software development, we are implementing this novel technology in almost all of our ongoing projects.',
    expyes: false
  }
]

const HI3Tech = () => {
  return (
  <div>
    <div className="portfolio__hi3tech section__padding" id="ongoingprojects">
      <div className="portfolio__hi3tech-heading">
        <h1 className="gradient__text">The HI3 Tech lab’s ongoing projects push 
          the boundary of what’s possible in the HCI field.
        </h1>
        <img src={Sponsors}></img>
      </div>
      <div className="portfolio__hi3tech-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} stylechoice="portfolio__features-container__feature"  key={item.title + index} />
        ))}
      </div>
    </div>
    {/* <div>
      <br/>
      <h5 className='portfolio__hi3tech-sponsors'>Our lab is sponsored by 
      the National Institutes of Health, American Cancer Society, The National Science Foundation,
      Prisma Health, and other national sponsors
      </h5>
    </div> */}
  </div>
  )
}

export default HI3Tech