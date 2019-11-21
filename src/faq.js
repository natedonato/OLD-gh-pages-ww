import React from 'react';
import AboutItem from './aboutItem';

class Faq extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            faq: [{
                    question: "Building an informational page with occasionally updating content?",
                    answer: "I have deployed projects used static site generators such as Gatsby and Jekyll to generate static sites from blog posts or markdown files, allowing for CDN delivered lightning fast load times, cheaper hosting, and reliable performance."
                },
                {
                    question: "Need to handle lots of dynamic user data?",
                    answer: "My experience with both relational (SQL) and non-relational (NoSQL) database management systems, as well as my history using MVC pattern frameworks such as Ruby on Rails and Express, enables me to deliver highly cohesive backend api solutions for any service you or your business may need."
                },
                {
                    question: "Storing user uploaded images or videos?",
                    answer: "I have integrated sites with Amazon Web Services S3 and MongoDB Atlas as cloud data storage services, reducing server load and providing great future scalability."
                },
                {
                    question: "Need a beautiful and interactive user interface?",
                    answer: "I am not only an expert in vanilla DOM manipulation, but also I have extensive front end framework expertise having built multiple single page web apps using React (with or without Redux for state management).  I create mobile responsive designs to fit any size screen from mobile phones to widescreen monitors.  My mastery of Photoshop also allows me to create and edit custom image assets and frame animations without needing to outsource for graphic design."
                },
                {
                    question: "Looking for something completely different? ",
                    answer: "I have built online games, interactive animations, and other highly unique pages that will leave a lasting impression and help drive traffic to your site. I am constantly researching and experimenting with the latest web development technologies to push the limits of possible user experience in modern browsers."
                },
            ]
        };
    }

    render(){
        return(
            <div className="aboutContainer" id="faq"> 
                <div className="aboutContent">
                < h3 > FAQ </h3>
                <p>
                    Every website has unique design needs and engineering challenges.  I have a deep technology toolkit and I know how to engineer the right system for the job:
                </p>
                {this.state.faq.map((faq, idx) => 
                <AboutItem question={faq.question} answer={faq.answer} key={idx}/>
                )}
                <p>
                    If you've read this far, it's because you're interested in seeing what I have to offer or retaining my services.  Get in touch via my resume and contact information below.
                </p>
                </div>
            </div>
        )
    }




}

export default Faq;