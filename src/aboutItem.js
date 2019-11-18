import React from 'react';
import {
    FiPlusCircle,
    FiMinusCircle
} from "react-icons/fi";

class AboutItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {expanded: false};
    }

    toggleExpand = () => {
        let expanded = !this.state.expanded;
        this.setState({expanded});
    }

    render(){
        return(
        <div className="aboutItem" >
            < p className = "aboutQ"
            onClick = {
                this.toggleExpand
            } >
                <div className="aboutIcons">
                    {this.state.expanded ? < FiMinusCircle /> : < FiPlusCircle />}
                </div>
                {this.props.question}
            </p>
            {this.state.expanded ? 
            <p className="aboutA">
                {this.props.answer}
            </p>
            : ''
            }
        </div>
        )
    }

}

export default AboutItem;