import React from 'react'
import './CSS/Loginsignup.css'

function LoginSinup() {
  return (
    <>
    <div className="login-signup">
      <h2>Sign Up</h2>
      <div className="inputs">
        <label htmlFor="name" >Name:</label>
        <input type="text" placeholder='enter your name' /><br/>
        <label htmlFor="name" >Email:</label>
        <input type="email" placeholder='enter your email' /><br />
        <label htmlFor="name" >Password:</label>
        <input type="password" placeholder='enter your password' /><br />
        <button>Sign Up</button>
      </div>
      <div className="login">
        <p>Already have an account? Login Here</p>
        <input type="checkbox" />
        <p>i agree to terms and conditions</p>
      </div>

    </div>
    </>
  )
}

export default LoginSinup
