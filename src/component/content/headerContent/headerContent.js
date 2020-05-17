import React, { useState } from 'react'
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from '../../../assets/images/profile.png';
import "./headerContent.scss";

function HeaderContent() {
  const [open, setOpen] = useState(true)
  const [search, setSearch] = useState(true)

  return (
    <header>
      <div className="search">
        <input className={`${!search ? "inputSearch" : ""}`} />
        <div className="imgWrp" onClick={() => setSearch(!search)}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="profileMenu">
        <div className="imgWrp">
          <img src={image} />
        </div>
        <FontAwesomeIcon icon={faAngleDown} onClick={() => setOpen(!open)} />
        <div className={`account ${!open ? "" : "down"}`}>
          <ul>
            <li className="header">activity</li>
            <li>
              <a>Chat</a><i className="chatQuantity">1</i>
            </li>
            <li>
              <a>Edit Acount</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <a>Recover Password</a>
            </li>
            <li>
              <a>Logs</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default HeaderContent
