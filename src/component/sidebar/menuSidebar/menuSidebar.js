import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { faAddressBook, faCarrot, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menuSidebar.scss";


function MenuSidebar(props) {

  const [show, setShow] = useState(true);
  const { active } = props;
  return (
    <aside className={!active ? "push" : ""}>
      <div className="aside-wrp">
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
              <FontAwesomeIcon onClick={() => setShow(!show)} className={`custom angel ${show ? "" : "rotate"}`} icon={faAngleDown} size="lg" />
            </Link>
            {/* subMenu */}
            <ul className={`${!show ? "show" : "hide"}`}>
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
      </div>
    </aside >
  )
}

export default MenuSidebar
