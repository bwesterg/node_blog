import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
        <button>Login</button>
        <p>Error</p>
        <span>Dont' have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
