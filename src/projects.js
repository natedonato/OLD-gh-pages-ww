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
            image: "./images/instagraff.png"
        },
        {
            title: "Landslide",
            description: "Online platforming game using JavaScript HTML and CSS, with MongoDB / Express.js backend for high score leaderboard",
            link: "http://landslide.natedonato.com/",
            github: "http://github.com/natedonato/landslide",
            image: ".//images/landslide.png"
        },
        {
            title: "Know It All",
            description: "A question / answer game with statistics and online search results. Team-built web-application utilizing MongoDB, Express.js, React.js, Node.js (MERN).",
            link: "https://knowitall-app.herokuapp.com/#/",
            github: "https://github.com/alissacrane123/KnowItAll",
            image: "./images/knowitall.gif"
        },
        {
            title: "Meditate",
            description: "A simple meditation timer web app created for personal use. Features calming music and images. Built using React.js",
            link: "https://natedonato.com/meditate",
            github: "http://github.com/natedonato/meditate",
            image: "./images/meditate.png"
        },
        {
            title: "Bart Signs",
            description: "Live updating Bay Area Rapid Transit estimated train departure signs for SF Embarcadero Station, using the BART API",
            link: "https://www.natedonato.com/bartsigns",
            github: "https://github.com/natedonato/bartsigns#readme",
            image: "./images/bart.png"
        },
        {
            title: "Glitch",
            description: "Destructive photo editor uses custom pixel sorting algorithms to create destructive reimaginations of any uploaded image",
            link: "https://natedonato.com/glitch/",
            github: "https://github.com/natedonato/glitch#readme",
            image: "./images/glitch.gif"
        }],
        minorProjects: [{ title: "Zen Boxes", link: "https://www.natedonato.com/zenboxes/", description: "Colorful boxes to play with in browser window for a calming break."},
        {title:"DressCat",
            link: "https://www.natedonato.com/dresscat/cat.html",
        description: "A simple game built with JavaScript, CSS & HTML5. Dress the cat!"
    },
        {title:"Student Info",
            link: "https://www.natedonato.com/studentInfo/",
        description: "A sample react app for displaying, searching, and tagging students."
    },
        {title:"Dejumble",
            link: "https://github.com/natedonato/dejumble#readme",
        description: "A tool for helping solve the Daily Jumble! Work in progress."
    },
        {title:"Watchmen",
            link: "https://natedonato.com/watchmen",
        description: "A stylish site for my analysis of Watchmen comic characters (WIP)."
    },
        {title:"Stopwatch",
            link: "https://github.com/natedonato/reactstopwatch#readme",
        description: "React components for creating multiple simultaneous online timers."
    },
        {title:"Leekspin",
            link: "http://www.natedonato.com/leekspin/",
        description: "Future easter egg for nateworld 2.0 (vanilla DOM / JavaScript)"
    },
        {title:"Fightstick",
            link: "https://github.com/natedonato/fightstick",
        description: "Static version of landslide game with HTML Gamepad API support (WIP)"
    },
        {title:"Snail",
            link: "https://natedonato.com/snail-fe/",
        description:"A slow moving traveling salesman with a special message. WIP / Abandonware"
    },
        {title:"NateWorld",
            link: "https://natedonato.com/nateworld/",
        description: "Gatsby site for creative personal projects (photos, poems, etc). WIP"
    },
        {title:"Band Names",
            link: "https://www.natedonato.com/wordniktest/",
        description: "A simple band name generator using words sourced via Wordnik web API"
    },
],
        // expanded: false
    };
    }

    // toggleExpand = () =>{
    //     let expand = !this.state.expanded;
    //     this.setState({expanded: expand});
    // }

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
            <h1 className="projectHeader"><strong>Featured Projects</strong></h1>
            <div className="projectFlex">
                {projects}
            </div>
            <div className="minorProjectContainer"><h3>Other Projects</h3>{minorProjects}</div>
                    <div className="projectsFoot" />
        </div>
        </>
    )
    }
}

function MinorProject(props){

    return(
        <div className="minorProject">
            <a href={props.data.link}>{props.data.title}</a>
            <span>{' - ' + props.data.description}</span>
        </div>
    )
}

export default Projects;