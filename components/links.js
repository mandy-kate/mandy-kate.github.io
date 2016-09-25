import React, { Component } from 'react'

class Links extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('Im here in links')
    return <links className="links">
      <nav className="link-nav">
        <ul className="link-nav-list">
          <li><a href="https://www.linkedin.com/in/mandy-baker-60306737?trk=hp-identity-name" target="_blank" id="link-resume">resume</a></li>
          <li><a href="mailto:mandykatebaker@gmail.com" target="_top" id="link-contact">contact</a></li>
          <li><a href="https://github.com/mandy-kate" target="_blank" id="link-projects"> projects</a> </li>
        </ul>
      </nav>
    </links>
  }
}

export default Links