import React from 'react';
import { Col } from 'react-bootstrap';
import HeaderSidebar from "./headerSidebar/headerSidebar"
import MenuSidebar from './menuSidebar/menuSidebar';

function Sidebar() {
  return (
    <Col xs="6" sm="3">
      <HeaderSidebar />
      <MenuSidebar />
    </Col>
  )
}

export default Sidebar
