import React, { Component } from 'react'
import DevHeader from './devheader'
import Header from './header'
import Image from './image'
import Links from './links'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log("app rendering")
    return <div className="app-container">

      <div className="app-inner">
        <Header />
        <DevHeader />
        <Image />

        <Links />
      </div>
    </div>
  }

}

export default App



