import React from 'react';

function ProjectItem(props){
    
    console.log(props);
    return(
        <div className="projectItem">
            <img className="projectThumbnail" src={props.data.image} alt={props.data.title}></img>

            <div className="projectContent">
                <h3 style={{textAlign: "center", margin: "0px 0px"}}>{props.data.title}</h3>
                <p>{props.data.description}</p>
                <div className="projectLinks">
                    <a href={props.data.link}>Live Demo</a>
                    <a href={props.data.github}>Github</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;