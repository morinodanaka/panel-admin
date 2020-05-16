import React from 'react'
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bannerContent.scss"

function BannerContent() {
  return (
    <div className="bannerContent">
      <div className="iconWrp">
        <FontAwesomeIcon icon={faCar} size="2x" />
      </div>
      <div className="txtWrp">
        <h4>Basic Dashboard</h4>
        <p>This is an example dashboard created using build-in elements and components.</p>
      </div>
    </div>
  )
}

export default BannerContent
