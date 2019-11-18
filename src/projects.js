import React from 'react';
import ProjectItem from './projectItem';
import './project.css';

function Projects(){
    const projectData = [
        {
            title: "Instagraff",
            description: "Full stack clone of Instagram, using Ruby on Rails / Postgres backend and React.js / Redux frontend & AWS cloud storage",
            link: "http://instagraff.natedonato.com/",
            github: "http://github.com/natedonato/instagraff",
            image: "https://www.natedonato.com/images/banana.png"
        },
        {
            title: "Instagraff",
            description: "",
            link: "",
            github: "",
            image: ""
        },
        {
            title: "Instagraff",
            description: "",
            link: "",
            github: "",
            image: ""
        },
        {
            title: "Instagraff",
            description: "",
            link: "",
            github: "",
            image: ""
        },
        {
            title: "Instagraff",
            description: "",
            link: "",
            github: "",
            image: ""
        },
        {
            title: "Instagraff",
            description: "",
            link: "",
            github: "",
            image: ""
        },

    ];

    const projects = projectData.map((proj, idx) =>
        <ProjectItem data={proj} key={idx}/>
        );

    return(
        <div className="projectsContainer" id="projects">
            <h1 className="projectHeader"><strong>Personal Projects</strong></h1>
            <div className="projectFlex">
                {projects}
            </div>
        </div>
    )
}

export default Projects;