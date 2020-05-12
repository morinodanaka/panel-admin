import React from 'react'
import Sidebar from '../component/Sidebar/Sidebar'
import Content from '../component/Content/Content'
import { Container, Row, Col } from "react-bootstrap"

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <Content />
        </Row>
      </Container>
    </>
  )
}

export default Home;
