import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./sqrRightBottom.scss"
import ChartWithFilterRightBottom from '../charts/chartWithFilterRightBottom';


function SqrRightBottom() {
  return (
    <>
      <Col sm={6}>
        <div className="wrpTabRightBottom">
          <div className="wrpBox">
            <Row noGutters>
              <Col sm={12}>
                <div className="box">
                  <div className="boxWrp">
                    <div className="svgWrp green">
                      <FontAwesomeIcon size="2x" icon={faBrain} />
                    </div>
                    <strong>17.25</strong>
                    <h5>Pizza Chart</h5>
                    <ChartWithFilterRightBottom/>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>

    </>

  )
}

export default SqrRightBottom
