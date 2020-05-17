import React from 'react'
import { Col, Row } from 'react-bootstrap'
import HeaderContent from './headerContent/headerContent'
import BannerContent from './bannerContent/bannerContent'
import SqrLeftTop from './sqrLeftTop/sqrLeftTop'
import "./content.scss"

function Content() {
  return (
    <Col xs="6" sm="9">
      <div className="content">
        <HeaderContent />
        <BannerContent />
        <Row>
          <SqrLeftTop />
          <SqrLeftTop />
        </Row>
      </div>
    </Col>
  )
}

export default Content
