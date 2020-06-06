import React from 'react'
import { Col , ProgressBar } from 'react-bootstrap'
import "./carousel.scss"

export default function Carousel() {
    return (
        <>
            <Col sm={3} className="carouselHolder">
                <div className="bgColor">
                    <div className="txtWrp">
                        <div>60%</div>
                        <ProgressBar animated now={60}/>
                    </div>
                </div>
            </Col>
            <Col sm={3} className="carouselHolder">
                <div className="bgColor">
                    <div className="txtWrp">
                        <div>35%</div>
                        <ProgressBar animated now={35}/>
                    </div>
                </div>
            </Col>
            <Col sm={3} className="carouselHolder">
                <div className="bgColor">
                    <div className="txtWrp">
                        <div>70%</div>
                        <ProgressBar animated now={70}/>
                    </div>
                </div>
            </Col>
            <Col sm={3} className="carouselHolder">
                <div className="bgColor">
                    <div className="txtWrp">
                        <div>83%</div>
                        <ProgressBar animated now={83}/>
                    </div>
                </div>
            </Col>
        </>
    )
}
