import React from 'react'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./headerContent.scss"

function HeaderContent() {
  return (
    <header>
      <div className="search">
        <div className="imgWrp">ryg</div>

      </div>
      <div className="profileMenu">
        <div className="imgWrp">gfweg</div>
        <FontAwesomeIcon icon={faAngleDown} />
        <div className="account">

          <ul>
            <li className="header">activity</li>
            <li>
              <a>Chat</a>
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
