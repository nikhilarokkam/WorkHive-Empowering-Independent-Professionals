/*import React from 'react'
import "./Footer.scss"
const Footer=()=>{
    return (
        <div className='footer'>Footer</div>
    )
}
export default Footer */

import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
      
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>WorkHive.</h2>
            <span>© Team TechTeens</span>
          </div>
          <div className="right">
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;