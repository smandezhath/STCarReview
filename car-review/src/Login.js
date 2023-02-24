import React from 'react'
import "./styles/login.css"

const Login = () => {
  return (
    <div className='container'>
        <h2>CAR-REVIEW</h2>
        <div className='login-form'>
        <h1>SIGN IN</h1>
            <input autoComplete='new-password' type="email" placeholder='Registered Email'/>
            <input autoComplete='new-password' type="password" placeholder='password'/>
            <button>Sign In</button>
            <p className='foot-note'><u>Forgot password?</u></p>
            <p className='foot-note'>New User? <u>Register</u></p>
        </div>
    </div>
  )
}

export default Login