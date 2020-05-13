import React from 'react';
import { Link } from 'react-router-dom'
import { faAddressBook, faCarrot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menuSidebar.scss";


function MenuSidebar() {
  return (
    <aside>
      <h5>MENU</h5>
      <ul>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faCarrot} />
              About us
          </Link>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faAddressBook} />
              Contact us
          </Link>
        </li>
      </ul>

      <h5>MENU</h5>
      <ul>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faCarrot} />
              About us
          </Link>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faAddressBook} />
              Contact us
          </Link>
        </li>
      </ul>

      <h5>MENU</h5>
      <ul>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faCarrot} />
              About us
          </Link>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faAddressBook} />
              Contact us
          </Link>
        </li>
      </ul>

      <h5>MENU</h5>
      <ul>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faCarrot} />
              About us
          </Link>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon className="custom" icon={faAddressBook} />
              Contact us
          </Link>
        </li>
      </ul>

    </aside>
  )
}

export default MenuSidebar
