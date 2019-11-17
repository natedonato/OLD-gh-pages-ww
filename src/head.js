import React from 'react';
import './head.css';
import image from './testlogo.png';

function Header(){



    return(
      <div style={{backgroundColor: "lightblue", height: "520px", position: "relative", overflow: "hidden"}}>
          <div className="headerText">
              <h1>
                  ND
              </h1>
              < h3 > Developer < /h3>
              <h3>Designer</h3>
              <h3>Engineer</h3>
          </div>
          <img src={image} />
      </div>
    )


}

export default Header;