import React from 'react';
import AboutItem from './aboutItem';
import './about.css';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            faq: [{question: "Working on an informational / static page with occasionally updating content?", 
            answer: "I have deployed projects using Gatsby or Jekyll to generate static sites for lightning fast load times and reliable performance."
            },
            {question: "Need to handle lots of dynamic user data?",
            answer: "My experience with both relational(SQL) and non - relational(NoSQL) database management systems, as well as my history using MVC pattern frameworks such as Ruby on Rails and Express enables me to deliver you highly cohesive backend api solutions for any service you or your business may need."
            },
            {question: "Storing potentially expensive user uploaded images or videos?",
            answer: "I have integrated sites with Amazon Web Services S3 and MongoDB Atlas for cloud data storage, reducing server load and providing great future scalability."},
            {question: "Need a beautiful and interactive user interface?",
            answer: "I am not only an expert in vanilla DOM manipulation, but also I have extensive front end framework expertise having built multiple single page web apps using React(with or without Redux for state management).I create mobile responsive designs to fit any size screen from mobile phones to widescreen monitors."
            },
            {question: "Looking for something completely different? ",
            answer: "I have built online games, interactive animations, and other highly unique pages that will leave a lasting impression and help drive traffic to you.I am constantly researching and experimenting with the latest web development technologies to push the limits of possible user experience in modern browsers."
            },
        ]
        };


    }

    render(){
        return(
            <div className="aboutContainer" id="about"> 
                < h1 > I'm Nate, a software engineer and web developer</h1>
                < h2 > , with experience in JavaScript, Node.js, React.js, Redux, SQL, Ruby on Rails, Git, HTML5, CSS3, and More </h2>
                <p>
                    I deliver full service web solutions to help your business maximize productivity and performance online.  When it comes to websites it’s not just about creating something great looking, it needs to deliver results for you.  Using my skills across both front end and back end I will design and develop for you not only great presentations but also scalable and performant data management systems.
                </p>
                <p>
                    Every website has unique needs and challenges.  I have a deep technology toolkit and I know how to engineer the right system for the job:
                </p>
                {this.state.faq.map((faq, idx) => 
                <AboutItem question={faq.question} answer={faq.answer} key={idx}/>
                )}
                <p>
                    If you 've read this far, it's because you 're interested in seeing what I have to offer or retaining my services.  Please continue on to check out some live demos of my projects or view my resume and contact information.
                </p>
            </div>
        )
    }

}

export default About;