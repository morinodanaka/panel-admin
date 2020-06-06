import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import 'react-tabs/style/react-tabs.css';
import "./sqrLeftTop.scss"
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
function SqrLeftTop() {
  return (
    <>
      <Col xs={6}>
        <div className="wrpTabLeft">
          <div className="wrpBox">
            <Tabs>
              <TabList>

                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                <span className="title" sm={6}>
                  BANDWIDTH REPORTS<FontAwesomeIcon icon={faRocket} /></span>
              </TabList>

              <TabPanel>
                <div className="progresBox">
                  <Row noGutters>
                    <Col sm={6}>
                      <div className="padding">
                        <h6>over view in month</h6><b>80%</b>
                        <ProgressBar variant="success" animated now={80} />
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="padding">
                        <h6>over view in month</h6><b>30%</b>
                        <ProgressBar variant="danger" animated now={30} />
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="padding">
                        <h6>over view in month</h6><b>65%</b>
                        <ProgressBar variant="warning" animated now={65} />
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="padding">
                        <h6>over view in month</h6><b>45%</b>
                        <ProgressBar animated now={45} />
                      </div>
                    </Col>
                  </Row>

                </div>
              </TabPanel>
              <TabPanel>
                <div className="padding">
                <AreaChart
        width={560}
        height={200}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Col>
    </>
  )
}

export default SqrLeftTop