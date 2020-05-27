import React from 'react';
import logo from '../../../assets/images/logo.png';
import { useSelector ,useDispatch} from 'react-redux';
import {activeAction} from "../../../redux/actions"
import './headerSidebar.scss'


function HeaderSidebar(props) {
  const activeState = useSelector(((state)=> state.active.active)) //useSelector
  const dispatch = useDispatch()
  return (
    <div className={`sideBarWrp ${activeState ? "push" : ""}`}>
      <div className={`${!activeState ? "show" : "hide"}`}>
        <img src={logo} />
      </div>
      <div onClick={() => dispatch(activeAction())} className={`humburger ${!activeState ? "change" : ""}`}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  )
}

export default HeaderSidebar
