import React, { Component } from 'react'
import './FormatOptions.sass'

class FormatOptions extends Component {
  constructor (props) {
    super(props)

    this.updateFormat = this.updateFormat.bind(this)
  }

  updateFormat (e) {
    this.props.setParsedFormat(e.target.getAttribute('name') == 'parsed')
  }

  render() {
    return (
      <ul className={this.props.parsedFormat ? 'formatting parsed' : 'formatting raw'} >
        <li name='parsed' onClick={this.updateFormat}>PARSED</li>
        <li name='raw' onClick={this.updateFormat}>RAW</li>
        <div className='underline-container'>
          <div className='underline'></div>
        </div>
      </ul>
    )
  }
}

export default FormatOptions
