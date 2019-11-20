import React from 'react';
import ProjectItem from './projectItem';
import './project.css';

class Projects extends React.Component{
    constructor(props){
        super(props);
    this.state={ majorProjects: [
        {
            title: "Instagraff",
            description: "Full stack social media photosharing webapp using Ruby on Rails / Postgres backend and React.js / Redux frontend, integrated with AWS S3 cloud storage.",
            link: "http://instagraff.natedonato.com/",
            github: "http://github.com/natedonato/instagraff",
            image: "https://www.natedonato.com/images/banana.png"
        },
        {
            title: "Landslide",
            description: "",
            link: "http://landslide.natedonato.com/",
            github: "http://github.com/natedonato/landslide",
            image: "https://www.natedonato.com/images/landslide-copy.png"
        },
        {
            title: "Know It All",
            description: "",
            link: "",
            github: "",
            image: "https://www.natedonato.com/images/knowitall.gif"
        },
        {
            title: "Meditate",
            description: "",
            link: "",
            github: "http://github.com/natedonato/meditate",
            image: "https://www.natedonato.com/images/meditate2.png"
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
        }],
        minorProjects: [{title: "test", link: "test"}],
        expanded: false
    };
    }

    toggleExpand = () =>{
        let expand = !this.state.expanded;
        this.setState({expanded: expand});
    }

    render(){

    const projects = this.state.majorProjects.map((proj, idx) =>
        <ProjectItem data={proj} key={idx}/>
        );

    const minorProjects = this.state.minorProjects.map((minProj, idx) =>
        <MinorProject data={minProj} key={idx} />
    );

    return(
        <>
        <div className="projectsContainer" id="projects">
            <h1 className="projectHeader"><strong>Personal Projects</strong></h1>
            <div className="projectFlex">
                {this.state.expanded ? projects : projects.slice(0, 3)}
            </div>
            {this.state.expanded ? minorProjects : ""}
            
            {this.state.expanded ?
            <button className="projectExpand red" onClick={this.toggleExpand}> Show Less </button>
            :
            <button className="projectExpand" onClick={this.toggleExpand}> View More </button>
                }
        </div>
        <div className="projectsFoot" />
        </>
    )
    }
}

function MinorProject(props){

    return(
        <div>
            hey
        </div>
    )
}

export default Projects;