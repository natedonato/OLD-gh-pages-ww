import React from 'react';
import './about.css';

function About (){

        return(
            <div className="aboutContainer" id="about"> 
                <div className="aboutContent">
                <h1> I'm Nate, a <strong>software engineer</strong> and <strong>web developer</strong>,</h1>
                <h3>with experience in JavaScript, Node.js, React, SQL and NoSQL Databases, Ruby on Rails, Git, HTML5, CSS3, and much more.</h3>
                <p>
                    I deliver full service web solutions to help your business maximize productivity and performance online.  When it comes to websites it’s not just about creating something great looking, it needs to deliver results for you.  Using my skills across both front end and back end I will produce for you not only great presentations but also scalable and performant data management systems.
                </p>    
                <p>
                    Every website and business has different needs and faces unique challenges.  I have a deep technology toolkit and extensive independent experience allowing me to quickly integrate with any existing web development team or even build a project for you from scratch.  Check out some samples of my work below:
                </p>
                </div>
            </div>
        )
}

export default About;