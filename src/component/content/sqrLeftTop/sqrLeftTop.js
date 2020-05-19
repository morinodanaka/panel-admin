import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chart from "react-google-charts";


import 'react-tabs/style/react-tabs.css';
import "./sqrLeftTop.scss"

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
                  <Chart
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Year', 'Sales', 'Expenses', 'Profit'],
                      ['2014', 1000, 400, 200],
                      ['2015', 1170, 460, 250],
                      ['2016', 660, 1120, 300],
                      ['2017', 1030, 540, 350],
                    ]}
                    options={{
                      // Material design options
                      chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                      },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                  />
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