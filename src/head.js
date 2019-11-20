import React from 'react';
import './head.css';
import image from './testlogo.png';

function Header(){



    return(
      <div id="home" className="headContainer">
          <div className="headerText">
              <h1>
                  ND
              </h1>
              < h3 > Developer < /h3>
              <h3>Designer</h3>
              <h3>Engineer</h3>
          </div>
          <img className="headImg" src={image} alt="Nate Donato" />
      </div>
    )


}

export default Header;