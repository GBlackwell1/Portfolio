import "./project.css";

const Project = (props) => {
    return (
       <div>
            <div className="portfolio_project-container_cards">
                <div className="portfolio_project-container_image">
                    <img src={props.src}></img>
                </div>
                <h1 className="gradient__text">{props.title}</h1>
                <p className="sub__text">{props.description}</p>
            </div>
       </div> 
    )
}

export default Project;