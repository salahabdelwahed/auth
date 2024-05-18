import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link>Home</Link>
        </li>
        <li>
            <Link>Login</Link>
        </li>
        <li>
            <Link>Register</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
