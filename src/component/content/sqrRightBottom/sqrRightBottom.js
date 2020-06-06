import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import "./sqrRightBottom.scss"

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

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
                    <AreaChart
                      width={500}
                      height={200}
                      data={data}
                      margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                      }}
                    >
        
        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
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
