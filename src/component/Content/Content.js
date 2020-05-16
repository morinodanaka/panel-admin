import React from 'react'
import { Col } from 'react-bootstrap'
import HeaderContent from './headerContent/headerContent'
import BannerContent from './bannerContent/bannerContent'

function Content() {
  return (
    <Col style={{ padding: "0" }} xs="6" sm="9">
      <HeaderContent />
      <BannerContent />
    </Col>
  )
}

export default Content
