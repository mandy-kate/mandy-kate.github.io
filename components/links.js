import React, { Component } from 'react'

import { Link } from 'react-router'

class Links extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('Im here in links')
    return <div className="img-container">
        <h3>web developer</h3>
        <links className="links">
          <nav className="link-nav">
            <Link className="image" to='/contact'>About</Link>
            <Link className="image" to='/projects'>Projects</Link>
          </nav>
        </links>
      </div>
  }
}

export default Links
