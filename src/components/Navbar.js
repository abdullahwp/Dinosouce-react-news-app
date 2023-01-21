import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=> {

    return (
        <nav> 
        <Link to="/" className="logo">DinoSouce</Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/business">business</Link></li>
          <li><Link to="/entertainment">entertainment</Link></li>
          <li><Link to="/health">health</Link></li>
          <li><Link to="/science">science</Link></li>
          <li><Link to="/sports">sports</Link></li>
          <li><Link to="/technology">technology</Link></li>
        </ul>
        <div className="toggle_dak">
            <input type="checkbox" id="switch"  />
            <label htmlFor="switch">Toggle</label>
        </div>
      </nav>
    )
  }

export default Navbar