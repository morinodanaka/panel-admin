import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chart from "react-google-charts";

import "./sqrLeftBottom.scss"


function SqrLeftBottom() {
  return (
    <>
      <Col sm={6}>
        <div className="wrpTabLeftBottom">
          <div className="wrpBox">
            <Row noGutters>
              <Col sm={6}>
                <div className="box">
                  <div className="svgWrp blue">
                    <FontAwesomeIcon size="2x" icon={faRocket} />
                  </div>
                  <strong>17.25</strong>
                  <h5>Pizza Chart</h5>
                  <Chart
                    width={'100%'}
                    height={'auto'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Year', 'Sales', 'Expenses'],
                      ['2013', 1000, 400],
                      ['2014', 1170, 460],
                      ['2015', 660, 1120],
                      ['2016', 1030, 540],
                    ]}
                    options={{
                      isStacked: true,
                      height: 300,
                      legend: { position: 'top', maxLines: 3 },
                      vAxis: { minValue: 0 },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="box">
                  <div className="svgWrp red">
                    <FontAwesomeIcon size="2x" icon={faRocket} />
                  </div>
                  <strong>17.25</strong>
                  <h5>Pizza Chart</h5>
                  <Chart
                    width={'100%'}
                    height={'auto'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Year', 'Sales', 'Expenses'],
                      ['2013', 1000, 400],
                      ['2014', 1170, 460],
                      ['2015', 660, 1120],
                      ['2016', 1030, 540],
                    ]}
                    options={{
                      isStacked: 'relative',
                      height: 300,
                      legend: { position: 'top', maxLines: 3 },
                      vAxis: {
                        minValue: 0,
                        ticks: [0, 0.3, 0.6, 0.9, 1],
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

export default SqrLeftBottom
