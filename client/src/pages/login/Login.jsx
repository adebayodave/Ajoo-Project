import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
    const alert=" you have not paid for the lastt five years"
  return (
    <div id='login'>
    <div class="login">
    <form>
            <h1>Login</h1>
            {alert && <div>
                    <p>{alert}</p>
                
                </div>}
            <div className='login-div'>
                <label htmlFor='email'>
                    Email:
                </label>
                <input type="text" id='email' autoFocus placeholder="email address"/>
            </div>
            <div className='login-div'>
                <label htmlFor='password'>
                    Password:
                </label>
                <input type="text" id='password' placeholder="Password" />
            </div>
            
        <button id='login-btn'>Login</button>
        <div class="pragraph">
            <Link to={'/'}>forgot Password</Link>
            <Link to={'/signup'}>create account</Link>
        </div>
    </form>
</div>
</div>
  )
}

export default Login