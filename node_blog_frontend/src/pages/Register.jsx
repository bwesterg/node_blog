import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
      <h2>Register</h2>
      <form>
        <input required type="text" placeholder="username"/>
        <input required type="email" placeholder="email"/>
        <input required type="text" placeholder="password"/>
        <button>Register</button>
        <p>Error</p>
        <span>Have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register