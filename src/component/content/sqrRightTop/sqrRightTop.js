import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./sqrRightTop.scss"

function SqrRightTop() {
  return (
    <>
      <Col xs={6}>
        <div className="wrpTabRight">
          <div className="wrpBox">
            <Row noGutters>
              <Col sm={6}>
                <div className="red box">
                  <FontAwesomeIcon size="2x" icon={faRocket} />
                  <strong>17.25</strong>
                </div>
              </Col>
              <Col sm={6}>
                <div className="blue box">
                  <FontAwesomeIcon size="2x" icon={faRocket} />
                  <strong>17.25</strong>
                </div>
              </Col>
              <Col sm={6}>
                <div className="midnightBlue box">
                  <FontAwesomeIcon size="2x" icon={faRocket} />
                  <strong>17.25</strong>
                </div>
              </Col>
              <Col sm={6}>
                <div className="green box">
                  <FontAwesomeIcon size="2x" icon={faRocket} />
                  <strong>17.25</strong>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </>
  )
}

export default SqrRightTop
