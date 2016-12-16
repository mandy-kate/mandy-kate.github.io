import React, { Component } from 'react'

class Header extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return <div>
      <header className="header" >
        <div className="header-inner">
           <h1>Amanda Baker - Web Developer</h1>
        </div>
      </header>
     </div>
  }
}

export default Header