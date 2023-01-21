import React, { Component } from 'react'
import loading from './loader.gif'

const Spinner = ()=> {
    return (
      <div className="spinner_main">
        <img src={loading} alt="Loader spinner" />
      </div>
    )
}

export default Spinner