import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import './headerSidebar.scss'


function HeaderSidebar() {
  const [active, setActive] = useState(false);
  return (
    <div className="sideBarWrp">
      <div className="img-wrp">
        <img src={logo}></img>
      </div>
      <div onClick={() => setActive(!active)} className={`humburger ${!active ? "change" : ""}`}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  )
}

export default HeaderSidebar
