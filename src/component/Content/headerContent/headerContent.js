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
            <li>
              <a>kwem</a>
            </li>
            <li>
              <a>kwem</a>
            </li>
            <li>
              <a>kwem</a>
            </li>
            <li>
              <a>kwem</a>
            </li>
            <li>
              <a>kwem</a>
            </li>
          </ul>
        </div>

      </div>

    </header>
  )
}

export default HeaderContent
