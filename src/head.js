import React from 'react';
import './head.css';

function Header(){



    return(
      <div style={{backgroundColor: "lightblue", height: "520px"}}>
          <div className="headerText">
              <h1>
                  ND
              </h1>
              < h3 > Developer < /h3>
              <h3>Designer</h3>
              <h3>Engineer</h3>
          </div>
      </div>
    )


}

export default Header;