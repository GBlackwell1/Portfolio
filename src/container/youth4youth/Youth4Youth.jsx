import React from "react";
import "./youth4youth.css";
import PhoneMock from "../../assets/2Screen_Mock.png";
import Y4YLogo from "../../assets/Y4YLogo.png";
const Youth4Youth = () => {
    return (
        <div id="youth4youth" className="section__padding">
            <div className="header_container">
              <img src={Y4YLogo} />
              <h1  className="portfolio__youth4youth-heading gradient__text">
                  A Health Literacy Initiative for South Carolina Youth
              </h1>
              <div className="portfolio__youth4youth-container">
              <p>Youth4Youth is a privately funded React Native based application to help promote health literacy in uninformed, 
                rural areas in the state of South Carolina. We are working with national healthcare sponsors and title one
                school districts in the upstate to provide an application and resources that are widely accessible
                to students that might not have the capabilities to garner information by any other means. The marketing team
                is working hard to establish an online presence on social media and creating a website. We're also working on getting
                paperwork filed to become an offical 501c non profit. A proof of concept application was created in React Native and was submitted for my 
                Computer Science Capstone project at the University of South Carolina. We're continuing to work on developing and expanding
                the application and intiative.</p>
            </div>
          </div>
          <div className="MockContainer">
            <img className="phoneMockImage" src={PhoneMock} />
          </div>
        </div>
    );
}

export default Youth4Youth;