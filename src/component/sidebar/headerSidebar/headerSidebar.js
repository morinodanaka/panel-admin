import React from 'react';
import logo from '../../../assets/images/logo.png';
import './headerSidebar.scss'


function HeaderSidebar(props) {
  const { show, setShow } = props;
  return (
    <div className={`sideBarWrp ${!show ? "push" : ""}`}>
      <div className={`${show ? "show" : "hide"}`}>
        <img src={logo} />
      </div>
      <div onClick={() => setShow(!show)} className={`humburger ${!show ? "change" : ""}`}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  )
}

export default HeaderSidebar
