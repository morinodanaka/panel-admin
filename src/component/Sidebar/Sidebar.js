import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import HeaderSidebar from "./headerSidebar/headerSidebar"
import MenuSidebar from './menuSidebar/menuSidebar';

function Sidebar() {
  const [show, setShow] = useState(true);

  return (
    <Col sm="3">
      <HeaderSidebar show={show} setShow={setShow} />
      <MenuSidebar active={show} />
    </Col>
  )
}

export default Sidebar
