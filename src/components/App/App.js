import React, { Component } from 'react'
import Display from '../Display'
import Error from '../Error'
import FormatOptions from '../FormatOptions'
import Search from '../Search'
import './reset.css'
import './App.sass'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      place: null,
      parsedFormat: true
    }

    this.setError = this.setError.bind(this)
    this.clearError = this.clearError.bind(this)
    this.setPlace = this.setPlace.bind(this)
    this.setParsedFormat = this.setParsedFormat.bind(this)
  }

  setError () {
    this.setState({error: 'Invalid Request'})
  }

  clearError () {
    this.setState({error: null})
  }

  setPlace (place) {
    this.setState({place: place, error: null})
  }

  setParsedFormat (bool) {
    this.setState({parsedFormat: bool})
  }

  render() {
    return (
      <main>
        <h1 className='app-title'>Google Places API Demo</h1>
        <Search
         setPlace={this.setPlace}
         setError={this.setError} />
        {
          !!this.state.error &&
          (
            <Error
             error={this.state.error}
             clearError={this.clearError} />
          )
        }
        {
          !this.state.place &&
          (
            <p className='greeting'>API request results will appear here</p>
          )
        }
        {
          !!this.state.place &&
          (
            <div>
              <FormatOptions
               setParsedFormat={this.setParsedFormat}
               parsedFormat={this.state.parsedFormat} />
              <Display
               place={this.state.place}
               parsedFormat={this.state.parsedFormat} />
            </div>
          )
        }
      </main>
    )
  }
}

export default App
