import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chart from "react-google-charts";
import "./sqrRightBottom.scss"

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
                  </div>
                  <Chart
                    width={'100%'}
                    height={'auto'}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={[['Generation', 'Descendants'], [0, 1], [1, 33], [2, 269], [3, 2013]]}
                    options={{
                      title: 'Descendants by Generation',
                      hAxis: { title: 'Generation', minValue: 0, maxValue: 3 },
                      vAxis: { title: 'Descendants', minValue: 0, maxValue: 2100 },
                      trendlines: {
                        0: {
                          type: 'exponential',
                          color: 'green',
                        },
                      },
                    }}
                    rootProps={{ 'data-testid': '3' }}
                  />
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
