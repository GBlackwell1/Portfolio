import { useState, React } from 'react'
import "./projects.css"
import { Project } from "../../components/index";
import Allure from "../../assets/allure.jpg";
import MSN from "../../assets/msn.jpg";
import QS from "../../assets/quitStart.jpg";
import SM from "../../assets/smart_mirror.jpg";
import RA from "../../assets/robotarm.jpg";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  window.onresize = checkResize; 
  function checkResize() {
    if (window.innerWidth <= 1050 && isMobile === false) {
      setIsMobile(true);
    } else if (window.innerWidth > 1050 && isMobile === true) {
      setIsMobile(false);
    }
  }

  return (
    <div>
      <div className="section__padding" id="projects">
        <div className="portfolio__projects-heading">
          <h1 className="gradient__text">
            See what's happening in the lab...
          </h1>
        </div>
        {isMobile === true ? <div className="portfolio__projects-cards_container-top">
            <Project title={"MSNTASK"} src={MSN} description={"As lead software engineer, I've overseen and controlled study design, development, deployment, and data extraction/cleaning. Integrating React.js, Firebase, and python into one project to study user behavior in response to faux security prompts. A multi-university project between University Of Nevada, Las Vegas and University of South Carolina, seeks to explain and understand Dual-Task Interference theory."} />
          </div> : <></> }
        <div className="portfolio__projects-cards_container">
          <div className="portfolio__projects-cards_container-left">
            <div>
              <Project title={"ALLURE"} src={Allure} description={"An interactive, educational platform using AI technology."} />
              <Project title={"QuitSTART"} src={QS} description={"An assistive healthcare application for rural recurring smokers."} />
            </div>
            <div>
              <Project title={"Virtual Robot Arm"} src={RA}description={"Enables remote technology for manufacturing workers."} />
              <Project title={"Smart Mirror"} src={SM} description={"A personal, restorative interactive smart-mirror."} />
            </div>
          </div>

          <div className="portfolio__projects-cards_container-right">
            <Project title={"MSNTASK"} src={MSN} description={"As lead software engineer, I've overseen and controlled study design, development, deployment, and data extraction/cleaning. Integrating React.js, Firebase, and python into one project to study user behavior in response to faux security prompts. A multi-university project between University Of Nevada, Las Vegas and University of South Carolina, seeks to explain and understand Dual-Task Interference theory."} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects