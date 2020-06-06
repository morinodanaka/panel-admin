import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { faBug, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  LineChart, Line ,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import "./sqrLeftBottom.scss"

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
const dataTwo = [
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
                    <FontAwesomeIcon size="2x" icon={faBullhorn} />
                  </div>
                  <strong>17.25</strong>
                  <h5>Pizza Chart</h5>
                  <BarChart width={150} height={300} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
                </div>
              </Col>
              <Col sm={6}>
                <div className="box">
                  <div className="svgWrp red">
                    <FontAwesomeIcon size="2x" icon={faBug} />
                  </div>
                  <strong>17.25</strong>
                  <h5>Pizza Chart</h5>
                  <LineChart width={250} height={300} data={dataTwo}>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
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
