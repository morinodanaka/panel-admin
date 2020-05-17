import React, { useState } from 'react'
import { Col, Tabs, Tab, Sonnet } from 'react-bootstrap'
import "./sqrLeftTop.scss"

function SqrLeftTop() {
  const [key, setKey] = useState('home');
  return (
    <>
      <Col xs={6}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="home" title="Home" >
            Home Content
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Profile Content
          </Tab>
          <Tab eventKey="contact" title="Contact" >
          </Tab>
        </Tabs>
      </Col>
      <Col xs={6}>
        <div className="wrpBox">ckjwn</div>
      </Col>
    </>
  )
}

export default SqrLeftTop