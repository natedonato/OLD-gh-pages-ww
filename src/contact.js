import React from 'react';
import './contact.css';
import {
    FaGithub,
    FaLinkedin,
    FaFileAlt
} from "react-icons/fa";
import {
    IoIosMail
} from "react-icons/io";



function Contact(){

    return(
        <div id="contact">
            <h3>Contact Nate:</h3>
            <div className="contactIcons">
                    <a href="https://github.com/natedonato/">
                        <FaGithub />
                        <div>Github</div>
                    </a>
                    <a href="https://www.linkedin.com/in/natedonato/">
                    <FaLinkedin />
                        <div>LinkedIn</div>
                    </a>  
                    <a href="mailto:nate@gmail.com" className="email">
                    <IoIosMail />
                        <div>Email</div>
                    </a>  
                    <a href="./resume/resume.html">
                        <FaFileAlt />
                        <div>Resume</div>
                    </a>  
            </div>
            <div className="phone" >p. 510-316-1989</div>
            <div className="copywrite">© Nate Donato 2019</div>
        </div>
    )
}

export default Contact;