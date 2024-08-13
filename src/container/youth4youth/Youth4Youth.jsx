import React from "react";
import "./youth4youth.css";
import ChatComponent from "../../components/chatbot/ChatComponent";
import WorkinHard from "../../assets/workinhard.gif";
const Youth4Youth = () => {
    return (
        <div id="youth4youth" className="section__padding">
            <div className="portfolio__youth4youth-heading-bar"/>
            <h1  className="portfolio__youth4youth-heading gradient__text">
                Youth4Youth
            </h1>
            <div className="portfolio__youth4youth-container">
              <p>Youth4Youth is a privately funded React Native based application to help promote health literacy in uninformed, 
                rural areas in the state of South Carolina. We are working with national healthcare sponsors and title one
                school districts in the upstate to provide an application and resources that are widely accessible
                to students that might not have the capabilities to garner information by any other means. The marketing team
                is working hard to establish an online presence on social media and creating a website. Check back in the future
                to keep updated!</p>
                <img src={WorkinHard} />
              {/*<ChatComponent />*/}
            </div>
        </div>
    );
}

export default Youth4Youth;