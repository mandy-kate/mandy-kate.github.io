import React, { Component } from 'react'

import { Link } from 'react-router'

class Links extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('Im here in links')
    return  <div className="img-container">
      <links className="links">
      <img className="Image" src="http://i.imgur.com/CPwmfc5.jpg"/>
      <nav className="link-nav">
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/projects'>Projects</Link>
      </nav>
    </links>
  </div>
  }
}

export default Links

