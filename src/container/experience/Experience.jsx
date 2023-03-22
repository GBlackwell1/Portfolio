import React from 'react'
import './Experience.css'
import { Feature } from '../../components'

const Experience = () => {
  return (
    <div className="portfolio__experience section__margin" id="experience">
      { /* Left Information */ }
      <div className="portfolio__experience-feature">
        <Feature title="Experience" />
        <div className="portfolio__experience-heading">
          <h1 className="gradient__text">
            I am a highly self-motivated 
            individual, actively seeking experience outside of academics
          </h1>
        </div>
        <Feature title="In-lab Development" text="I started working as a Research 
        Volunteer beginning summer of 2022, I was then promoted to Paid Research 
        Assistant at winter of 2023.  I have been granted more paid hours than 
        standard, due to my work ethic."/>
      </div>
      { /* Right Information */ }
      <div className="portfolio__experience-container">
        <Feature title="Programming Languages" text="My knowledge exists in low-level 
        and back-end languages such as Java, C++ and ASM. As an engineer I am familiar 
        with R & Matlab equivalent functional languages. I have delved into Robotic 
        Operating System (ROS 1) and Python for automating robotic movements. I have 
        personal experience in React, JS, HTML, and CSS along with plenty of git experience 
        and UNIX terminal familiarity."/>
        <Feature title="Personal Work and Interests" text="Much of my in-lab and personal 
        work is in web development. Specifically developing chat-bots and creating innovative 
        ways to communicate with an end user."/>
      </div>
    </div>
  )
}

export default Experience