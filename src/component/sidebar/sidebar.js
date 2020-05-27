import React from 'react';
import { Col } from 'react-bootstrap';
import HeaderSidebar from "./headerSidebar/headerSidebar"
import MenuSidebar from './menuSidebar/menuSidebar';
import { useSelector } from 'react-redux';

function Sidebar() {
  const stateActive = useSelector((state) =>state.active.active); //second active refer to combineReducer obj parametr
  return (
    <Col sm={`${!stateActive ? "3" : "1"}`}>
      <HeaderSidebar />
      <MenuSidebar  />
    </Col>
  )
}

export default Sidebar
