import React from 'react'
import Sidebar from '../component/Sidebar/Sidebar'
import Content from '../component/Content/Content'
import { Container, Row } from "react-bootstrap"
import "./home.scss"

function Home() {
  return (<>
    <Container fluid>
      <Row>
        <Sidebar />
        <Content />
      </Row>
    </Container>
  </>)
}

export default Home;