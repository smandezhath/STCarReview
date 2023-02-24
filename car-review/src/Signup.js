import React from 'react'
import "./styles/login.css"
function Signup()  {
    return (
      <div className='container'>
          <h2>CAR-REVIEW</h2>
          <div className='login-form'>
          <h1>SIGN UP</h1>
          <input autoComplete='new-password' type="name" placeholder='Name'/>
              <input autoComplete='new-password' type="email" placeholder='New Email'/>
              <input autoComplete='new-password' type="password" placeholder='password'/>
              <button>Sign Up</button>
              <p className='foot-note'><u>Forgot password?</u></p>
              <p className='foot-note'>Existing User? <u>Sign In</u></p>
          </div>
      </div>
    )
  }

export default Signup



