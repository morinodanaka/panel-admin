import React from 'react';
import { Link } from 'react-router-dom'
import { faAddressBook, faCarrot, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch} from 'react-redux';
import { openAction } from '../../../redux/actions'
import "./menuSidebar.scss";


function MenuSidebar(props) {
  const activeState = useSelector((state) => state.active.active)
  const openState = useSelector((state) => state.open.open)
  const dispatch = useDispatch()
  return (
    <aside className={activeState ? "push" : ""}>
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
              <FontAwesomeIcon onClick={()=> dispatch(openAction())} className={`custom angel ${openState ? "" : "rotate"}`} icon={faAngleDown} size="lg" />
            </Link>
            {/* subMenu handle 2 states for show sub menu classes*/}
            <ul className={`${!openState && !activeState ? "show" : "hide"}`}>
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
