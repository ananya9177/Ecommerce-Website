import React from 'react'
import './Offers.css'
import exclusive_img from '../Assests/exclusive_image.png'

function Offers() {
  return (
    <>
    <div className="offers">
        <div className="offers-left">
            <h2>Exclusive <br></br> Offers For You</h2>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt="" />
        </div>
    </div>
    </>
  )
}

export default Offers
