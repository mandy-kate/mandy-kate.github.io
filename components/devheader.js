import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'


class DevHeader extends Component {

  render () {
     return (
            <div className='socialLinks'>
              <a href='https://github.com/mandy-kate'><FontAwesome name='github'/></a>
              <a href='https://twitter.com/MandozaKate'><FontAwesome name='twitter'/></a>
            </div>
        )
    }
}

export default DevHeader


