import React from 'react'
import './Experience.css'
import { Feature, FeatureExtended } from '../../components'

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
        Assistant at winter of 2023.  I was granted additional paid hours due to work ethic. 
        In the summer of 2023 I was promoted to a full time lab manager and lead software engineer."/>
      </div>
      { /* Right Information */ }
      <div className="portfolio__experience-container">
        <FeatureExtended title="Experience Summary" 
        text="Languages: C#, C++, C, Java, JavaScript, Python, HTML/CSS, T-SQL, XML/XPath, Assembly/MIPS, System Verilog." 
        secondText="Frameworks: .NET, React.JS, React Native, Node.JS."
        thirdText="Positions Held: Research Assistant, Lab Manager, Full Stack Software Engineering Intern, Software Engineering Intern."
        fourthText="Other: ROS1, git, OpenTelemetry, Firebase, WSL, UNIX/Bash, Unity, Android Studio, REST APIs."/>
        <Feature title="Personal Work and Interests" text="Much of my in-lab and personal 
        work is in web development, exploring new technologies in the space. 
        Specifically developing chat-bots and creating innovative ways to communicate with an end user."/>
      </div>
    </div>
  )
}

export default Experience