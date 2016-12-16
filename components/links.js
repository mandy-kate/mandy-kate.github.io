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
        <nav className="image-nav">
          <img className="image" src='./public/placeholder.jpg'></img>
          <img className="image" src='./public/placeholder.jpg'></img>
          <img className="image" src='./public/placeholder.jpg'></img>
        </nav>
        <nav className="link-nav">
          <Link className="image" to='/resume'>Resume</Link>
          <Link className="image" to='/contact'>Contact</Link>
          <Link className="image" to='/projects'>Projects</Link>
        </nav>
    </links>
  </div>
  }
}

export default Links

//<img className="Image" src="http://i.imgur.com/CPwmfc5.jpg"/>