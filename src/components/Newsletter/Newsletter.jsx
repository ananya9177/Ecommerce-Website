import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <>
    <div className="newsletter">
       <h1>Get Exclusive Offers On Your Email</h1>
       <p>Subscribe to our newsletter and stay updated</p>
       <div className="email">
        <input type="email" placeholder='enter your email' />
        <button>Subscribe</button>
       </div>
    </div>
    </>
  )
}

export default Newsletter
