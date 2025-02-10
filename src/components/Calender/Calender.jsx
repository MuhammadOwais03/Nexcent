import React from 'react'
import './Calender.css'
import '../Unlock/Unlock.css'

import screnn from '../../assets/screen.jpg'

const Calender = () => {
  return (
    <div className='calender-container unlock-container' >
        <div className="calender-image unlock-images">
            <img src={screnn} alt="" />
        </div>
      <div className="unlock-content">
        <h1 className="primary-color">
        How to design your site footer like we did
        </h1>
        <p className="normal-text small-text">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="small-btn" style={{width: '115px'}}>Learn More</button>
      </div>
    </div>
  )
}

export default Calender
