import React from 'react'

function forget() {
    return (
      <div className='container'>
          <h2>CAR-REVIEW</h2>
          <div className='login-form'>
          <h1>Forgotten password</h1>
              <input autoComplete='new-password' type="email" placeholder='Registered Email'/>
              <input autoComplete='new-password' type="password" placeholder='New password'/>
              <button>Re-Sign in</button>
              <p className='foot-note'>Existing User? <u>Sign In</u></p>
              <p className='foot-note'>New User? <u>Register</u></p>
          </div>
      </div>
    )
  }

export default forget