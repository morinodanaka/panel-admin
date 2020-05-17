import React from 'react'
import Sidebar from '../component/sidebar/sidebar'
import Content from '../component/content/content'
import { Container, Row } from "react-bootstrap"
import "./home.scss"

function Home() {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Content />
      </Row>
    </Container>
  )
}

export default Home;