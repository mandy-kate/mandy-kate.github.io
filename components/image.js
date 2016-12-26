import React, { Component } from 'react'

class Image extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log("image rendering")
    return <div className="img-container">
      <img className="mainImage" src='./public/background.jpg'></img>



    </div>
  }

}

export default Image