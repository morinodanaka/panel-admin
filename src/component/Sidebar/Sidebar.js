import React from 'react';
import { Col } from 'react-bootstrap';
import HeaderSidebar from "./headerSidebar/headerSidebar"

function Sidebar() {
  return (
    <Col xs="6" sm="3">
      <HeaderSidebar />
      <aside>
        <ul>
          <li>krgqiwu</li>
        </ul>
      </aside>
    </Col>
  )
}

export default Sidebar
