import React, { Component } from 'react'
import Links from './links'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log("app rendering")
    return <div className="app-container">

      <div className="app-inner">
        <Links />
      </div>
    </div>
  }

}

export default App